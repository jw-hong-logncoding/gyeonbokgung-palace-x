
import { useNavigate } from "react-router-dom";
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import FortIcon from '@mui/icons-material/Fort';
import { BUILDING_DATA_LIST } from "../../data";
import { useMemo } from "react";

const BuildingList = () => {
    const navigate = useNavigate();
    const navigateList = useMemo(() => {
        return [
            () => {navigate('/map/gwanghwamun')},
            () => {navigate('/map/heungnyemun')},
            () => {navigate('/map/geunjeongmun')},
            () => {navigate('/map/geunjeongjeon')},
            () => {navigate('/map/sajeongjeon')},
            () => {navigate('/map/sujeongjeon')},
            () => {navigate('/map/gyeonghoeru')},
            () => {navigate('/map/hyangwonjeong')},
            () => {navigate('/map/gangnyeongjeon')},
            () => {navigate('/map/jagyeongjeon')},
            () => {navigate('/map/jibokjae')},
            () => {navigate('/map/gyotaejeon')},
        ];
    }, [navigate])
    const buildingList = useMemo(() => {
        return BUILDING_DATA_LIST
            .map(({ title }, i) => ({ title, onClick: navigateList[i]}));
    }, [navigateList])

    return (
        <Box sx={{ overflowY: 'auto' }}>
            <Box
                marginLeft="10px"
                marginBottom="5px"
            >
                <Typography
                    sx={{
                        fontSize: '30px'
                    }}
                >
                    Buildings
                </Typography>
            </Box>
            <Divider />
            <List>
                {buildingList.map(({title, onClick}, index) => (
                <ListItem key={index} disablePadding>
                    <ListItemButton
                        onClick={onClick}
                    >
                        <Typography sx={{
                            fontSize: "18px",
                            marginRight: "10px"
                            }}
                        >
                            ►
                        </Typography>
                        <ListItemText primary={title} />
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default BuildingList;