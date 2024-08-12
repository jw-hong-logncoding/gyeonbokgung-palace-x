import { Box, Divider, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { useMemo } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { fetchAllLikesByBuildings } from "../../apis/firebaseApis";

const BuildingList = ({ onBuildingClick = () => {} }) => {
  const navigate = useNavigate();
  const { data } = useQuery("buildingLikesInfo", fetchAllLikesByBuildings);

  const navigateList = useMemo(() => {
    return [
      { title: 'Gwanghwamun', pathname: '/map/gwanghwamun' },
      { title: 'Heungnyemun', pathname: '/map/heungnyemun' },
      { title: 'Geunjeongmun', pathname: '/map/geunjeongmun' },
      { title: 'Geunjeongjeon', pathname: '/map/geunjeongjeon' },
      { title: 'Sajeongjeon', pathname: '/map/sajeongjeon' },
      { title: 'Sujeongjeon', pathname: '/map/sujeongjeon' },
      { title: 'Gyeonghoeru', pathname: '/map/gyeonghoeru' },
      { title: 'Hyangwonjeong', pathname: '/map/hyangwonjeong' },
      { title: 'Gangnyeongjeon', pathname: '/map/gangnyeongjeon' },
      { title: 'Jagyeongjeon', pathname: '/map/jagyeongjeon' },
      { title: 'Jibokjae', pathname: '/map/jibokjae' },
      { title: 'Gyotaejeon', pathname: '/map/gyotaejeon' }
    ];
  }, []);

  const handleBuildingClick = (building) => {
    navigate(building.pathname);
  };

  return (
    <Box sx={{ overflowY: 'auto' }}>
      <Box marginLeft="10px" marginBottom="5px">
        <Typography sx={{ fontSize: '30px' }}>Buildings</Typography>
      </Box>
      <Divider />
      <List>
        {navigateList.map((building, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton 
              onClick={() => handleBuildingClick(building)}
              onTouchEnd={() => handleBuildingClick(building)}  // Use onTouchEnd instead of onTouchStart
            >
              <Typography sx={{ fontSize: "18px", marginRight: "10px" }}>►</Typography>
              <ListItemText primary={building.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default BuildingList;
