import { Fragment, useRef, useState } from 'react';
import { Stage, Layer, Image, Circle, Rect } from 'react-konva';
import IMAGES from "../../assets/images";
import useImage from 'use-image';
import { useLocation, useNavigate } from 'react-router-dom';

const InteractiveMap = ({ isMobile, drawerWidth = 0 }) => {
    const [scale, setScale] = useState(0.18); // 초기 줌 레벨
    const [image] = useImage(IMAGES.mapPhoto); 
    const [pin] = useImage(IMAGES.pin); 
    const location = useLocation();
    const navigate = useNavigate();
    const stageRef = useRef(null);
    // const lastDist = useRef(0);
    const lastTouches = useRef([]);
    const [stagePosition, setStagePosition] = useState({ x: 0, y: 0 });

    const iconSize = 150;
    const selectedIconSize = 200;
    // 아이콘 위치 설정
    const icons = [
        {pathname: "/map/jibokjae", x: 750, y: 0, id: 1, width: iconSize, height: iconSize },
        {pathname: "/map/hyangwonjeong", x: 1000, y: 450, id: 2, width: iconSize, height: iconSize},
        {pathname: "/map/jagyeongjeon", x: 1400, y: 1350, id: 3, width: iconSize, height: iconSize},
        {pathname: "/map/gyeonghoeru", x: 675, y: 1525, id: 4, width: iconSize, height: iconSize},
        {pathname: "/map/gangnyeongjeon", x: 1025, y: 1625, id: 5, width: iconSize, height: iconSize},
        {pathname: "/map/gyotaejeon", x: 1025, y: 1465, id: 6, width: iconSize, height: iconSize},
        {pathname: "/map/sajeongjeon", x: 1025, y: 1840, id: 7, width: iconSize, height: iconSize},
        {pathname: "/map/geunjeongjeon", x: 990, y: 2060, id: 8, width: iconSize, height: iconSize},
        {pathname: "/map/sujeongjeon", x: 665, y: 1860, id: 9, width: iconSize, height: iconSize},
        {pathname: "/map/geunjeongmun", x: 990, y: 2360, id: 10, width: iconSize, height: iconSize},
        {pathname: "/map/heungnyemun", x: 985, y: 2690, id: 11, width: iconSize, height: iconSize},
        {pathname: "/map/gwanghwamun", x: 975, y: 3175, id: 12, width: iconSize, height: iconSize}
      ];

  const handleWheel = (e) => {
    e.evt.preventDefault();
    const stage = stageRef.current;
    const oldScale = stage.scaleX();
    const pointer = stage.getPointerPosition();
    const mousePointTo = {
      x: (pointer.x - stage.x()) / oldScale,
      y: (pointer.y - stage.y()) / oldScale,
    };

    //const newScale = e.evt.deltaY > 0 ? oldScale * 0.9 : oldScale * 1.1;
    const newScale = e.evt.deltaY > 0 ? oldScale * 0.96 : oldScale * 1.03;
    stage.scale({ x: newScale, y: newScale });

    const newPos = {
      x: pointer.x - mousePointTo.x * newScale,
      y: pointer.y - mousePointTo.y * newScale,
    };
    stage.position(newPos);
    stage.batchDraw();
  };
  const getDistance = (touches) => {
    const touch1 = touches[0];
    const touch2 = touches[1];
    return Math.hypot(
      touch2.clientX - touch1.clientX,
      touch2.clientY - touch1.clientY
    );
  };

  const handleTouchStart = (e) => {
    if (e.evt.touches.length >= 2) {
      lastTouches.current = getDistance(e.evt.touches);
    }
  };

  const handleTouchMove = (e) => {
    e.evt.preventDefault();
    if (e.evt.touches.length >= 2) {
      const newDist = getDistance(e.evt.touches);
      if (lastTouches.current && lastTouches.current > 0) {
        // 스케일 조정 민감도를 증가시키기
        const scaleBy = 1 + (newDist - lastTouches.current) / lastTouches.current;
        setScale((oldScale) => Math.min(Math.max(oldScale * scaleBy, 0.1), 10)); // 스케일 범위 설정
        lastTouches.current = newDist;
      }
    }
  };

  const handleTouchEnd = (e) => {
    if (e.evt.touches.length < 2) {
      lastTouches.current = 0; // 초기화
    }
  };

  const handleIconClick = (icon) => {
    // 클릭된 아이콘으로 화면 중심 이동
    const stage = stageRef.current;
    const scale = stage.scaleX(); // 현재 스케일

    // 스테이지 중앙으로 아이콘을 이동시키기
    const x = -icon.x * scale + (stage.width() - drawerWidth) / 2 - 13;
    const y = -icon.y * scale + stage.height() / (isMobile ? 4 : 2.5);

    setStagePosition({ x, y });
  };
  
    return (
      <Stage
        ref={stageRef}
        width={window.innerWidth - drawerWidth}
        height={window.innerHeight}
        offsetX={!isMobile ? -(window.innerWidth + drawerWidth + 1000) / 2 : 0}
        offsetY={-50}
        draggable
        scale={{ x: scale, y: scale }}
        onWheel={handleWheel}
        onTouchMove={handleTouchMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onDragMove={() => {}}
        x={stagePosition.x}
        y={stagePosition.y}
    >
        <Layer>
          <Image image={image} />
          {icons.map((icon, i) => (
            <Fragment key={`frag-${i}`}>
                <Rect
                    key={`rect-${i}`}
                    x={icon.x}
                    y={icon.y}
                    width={icon.pathname === location.pathname ? selectedIconSize : iconSize}
                    height={icon.pathname === location.pathname ? selectedIconSize : iconSize}
                    fill="white" // 흰색 배경
                    cornerRadius={40} // 테두리 반경 설정
                    shadowColor="black" // 그림자 색
                    shadowBlur={20} // 그림자 블러 강도
                    shadowOffsetX={10} // 그림자 X축 오프셋
                    shadowOffsetY={10} // 그림자 Y축 오프셋
                    shadowOpacity={0.6} // 그림자 투명도
                />
                <Image
                    key={i}
                    image={pin}
                    x={icon.x}
                    y={icon.y}
                    width={icon.pathname === location.pathname ? selectedIconSize : iconSize}  // 아이콘 크기 조절
                    height={icon.pathname === location.pathname ? selectedIconSize : iconSize}
                    onClick={() => {
                        handleIconClick(icon);
                        navigate(icon.pathname);
                    }}
                    onTap={() => {
                        handleIconClick(icon);
                        navigate(icon.pathname);
                    }}
                />
            </Fragment>
          ))}
        </Layer>
      </Stage>
    );
};

export default InteractiveMap;