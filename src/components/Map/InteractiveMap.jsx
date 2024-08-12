import { Fragment, useRef, useState, useEffect } from 'react';
import { Stage, Layer, Image, Rect, Text, Circle } from 'react-konva';
import IMAGES from "../../assets/images";
import useImage from 'use-image';
import { useLocation, useNavigate } from 'react-router-dom';

const InteractiveMap = ({ isMobile, drawerWidth = 0, selectedBuilding }) => {
  const [scale, setScale] = useState(0.18);
  const [image] = useImage(IMAGES.mapPhoto);
  const [pin] = useImage(IMAGES.pin);
  const location = useLocation();
  const navigate = useNavigate();
  const stageRef = useRef(null);
  const lastTouches = useRef([]);
  const [stagePosition, setStagePosition] = useState({ x: 25, y: 50 });
  const [selectedIcon, setSelectedIcon] = useState(null);

  const iconSize = 75;
  const iconSizeY = 98;
  const selectedIconSize = 89;
  const selectedIconSizeY = 105;
console.log("Updating selectedBuilding:", selectedBuilding);

  const icons = [
    { pathname: "/map/jibokjae", x: 800, y: 20, id: 1, width: iconSize, height: iconSizeY },
    { pathname: "/map/hyangwonjeong", x: 1050, y: 470, id: 2, width: iconSize, height: iconSizeY },
    { pathname: "/map/jagyeongjeon", x: 1450, y: 1370, id: 3, width: iconSize, height: iconSizeY },
    { pathname: "/map/gyeonghoeru", x: 705, y: 1575, id: 4, width: iconSize, height: iconSizeY },
    { pathname: "/map/gangnyeongjeon", x: 1075, y: 1665, id: 5, width: iconSize, height: iconSizeY },
    { pathname: "/map/gyotaejeon", x: 1075, y: 1505, id: 6, width: iconSize, height: iconSizeY },
    { pathname: "/map/sajeongjeon", x: 1055, y: 1860, id: 7, width: iconSize, height: iconSizeY },
    { pathname: "/map/geunjeongjeon", x: 1040, y: 2080, id: 8, width: iconSize, height: iconSizeY },
    { pathname: "/map/sujeongjeon", x: 685, y: 1920, id: 9, width: iconSize, height: iconSizeY },
    { pathname: "/map/geunjeongmun", x: 1040, y: 2430, id: 10, width: iconSize, height: iconSizeY },
    { pathname: "/map/heungnyemun", x: 1005, y: 2770, id: 11, width: iconSize, height: iconSizeY },
    { pathname: "/map/gwanghwamun", x: 985, y: 3165, id: 12, width: iconSize, height: iconSizeY }
  ];

  useEffect(() => {
    const currentIcon = icons.find((icon) => icon.pathname === location.pathname);
    if (currentIcon) {
      setSelectedIcon(currentIcon.id);
    }
  }, [location.pathname]);

useEffect(() => {
  if (selectedBuilding) {
    console.log("A");
    const icon = icons.find((icon) => icon.pathname === selectedBuilding.pathname);
    console.log(icon);
    if (icon) {
      handleIconClick(icon);
    }
  } else {
    const currentIcon = icons.find((icon) => icon.pathname === location.pathname);
    console.log("X:", currentIcon);
    if (currentIcon) {
      console.log("B");
      setSelectedIcon(currentIcon.id);
       handleIconClick(currentIcon);
    } else {
      setSelectedIcon(null); 
    }
  }
}, [selectedBuilding, location.pathname]);


  const handleWheel = (e) => {
    e.evt.preventDefault();
    const stage = stageRef.current;
    const oldScale = stage.scaleX();
    const pointer = stage.getPointerPosition();
    const mousePointTo = {
      x: (pointer.x - stage.x()) / oldScale,
      y: (pointer.y - stage.y()) / oldScale,
    };

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
        const scaleBy = 1 + (newDist - lastTouches.current) / lastTouches.current;
        setScale((oldScale) => Math.min(Math.max(oldScale * scaleBy, 0.1), 10));
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
    const stage = stageRef.current;
    let newScale;
    let newPos;

    if (isMobile) {
      newScale = 0.16; // Set a different zoom level for mobile
      newPos = {
        x: -icon.x * newScale + (window.innerWidth - drawerWidth) / 2 + 0, // Adjust centering for mobile
        y: -icon.y * newScale + window.innerHeight / 2 - 170,
      };
    } else {
      newScale = 0.33; // Set the desired zoom level for desktop
      newPos = {
        x: -icon.x * newScale + (window.innerWidth - drawerWidth) / 2 - 500,
        y: -icon.y * newScale + window.innerHeight / 2 - 200,
      };
    }

    setStagePosition(newPos);
    setScale(newScale);
    stage.position(newPos);
    stage.scale({ x: newScale, y: newScale });
    stage.batchDraw();
    setSelectedIcon(icon.id);
    navigate(icon.pathname);
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
        <Text
          text="
          National Palace
          Museum of Korea
          "
          x={1420}
          y={750}
          fontSize={43}
          fill="white"
          align="center"
          shadowColor="black"
          shadowBlur={30}
          shadowOffsetX={10}
          shadowOffsetY={10}
          shadowOpacity={0.7}
          strokeWidth={2}
          fontFamily="Arial Black, Gadget, sans-serif"
          textDecoration="bold"
          lineJoin="round"
          lineHeight="1.2" 
        />
        <Text
          text="
          National Folk
          Museum
          of Korea
          "
          x={88}
          y={2900}
          fontSize={45}
          fill="white"
          align="center"
          shadowColor="black"
          shadowBlur={30}
          shadowOffsetX={10}
          shadowOffsetY={10}
          shadowOpacity={0.7}
          strokeWidth={2}
          fontFamily="Arial Black, Gadget, sans-serif"
          textDecoration="bold"
          lineJoin="round"
          lineHeight="1.2" 
        />
        {icons.map((icon, i) => (
          <Fragment key={`frag-${i}`}>
            <Rect
              key={`rect-${i}`}
              x={icon.x}
              y={icon.y}
              width={icon.pathname === location.pathname ? selectedIconSize : iconSize}
              height={icon.pathname === location.pathname ? selectedIconSize : iconSizeY}
              fill="transparent" // 흰색 배경
              cornerRadius={40} // 테두리 반경 설정
              shadowColor="black" // 그림자 색
              shadowBlur={20} // 그림자 블러 강도
              shadowOffsetX={10} // 그림자 X축 오프셋
              shadowOffsetY={10} // 그림자 Y축 오프셋
              shadowOpacity={0.6} // 그림자 투명도
            />
            {selectedIcon === icon.id && (
              <Circle
                x={icon.x + iconSize / 2 + 10}
                y={icon.y + iconSize / 2 + 32}
                radius={selectedIconSize / 2 + 20}
                fill="rgba(255, 255, 0, 0.45)" // 노란색 반투명
                shadowColor="black" // 그림자 색
                shadowBlur={20} // 그림자 블러 강도
                shadowOffsetX={10} // 그림자 X축 오프셋
                shadowOffsetY={10} // 그림자 Y축 오프셋
                shadowOpacity={0.6} // 그림자 투명도
              />
            )}
            <Image
              key={i}
              image={pin}
              x={icon.x}
              y={icon.y}
              width={icon.pathname === location.pathname ? selectedIconSize : iconSize}  // 아이콘 크기 조절
              height={icon.pathname === location.pathname ? selectedIconSizeY : iconSizeY}
              onClick={() => {
                handleIconClick(icon);
              }}
              onTap={() => {
                handleIconClick(icon);
              }}
              shadowColor="black" // 그림자 색
              shadowBlur={10} // 그림자 블러 강도
              shadowOffsetX={15} // 그림자 X축 오프셋
              shadowOffsetY={7} // 그림자 Y축 오프셋
              shadowOpacity={0.6} // 그림자 투명도
            />
          </Fragment>
        ))}
      </Layer>
    </Stage>
  );
};

export default InteractiveMap;