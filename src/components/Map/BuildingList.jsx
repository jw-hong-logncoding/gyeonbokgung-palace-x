
import { useNavigate } from "react-router-dom";
import { Box, Divider, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { BUILDING_DATA_LIST } from "../../data";
import { useMemo } from "react";
import { useQuery } from "react-query";
import { fetchAllLikesByBuildings } from "../../apis/firebaseApis";
import { countLikes } from "../../functions/counterFunctions";
import LikeCounterOnMain from "../LikeCounterOnMain";

const BuildingList = () => {
    const { data } = useQuery("buildingLikesInfo", fetchAllLikesByBuildings);
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
            .map(({ title, value}, i) => ({ title, value, onClick: navigateList[i]}));
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
                {buildingList.map(({title, value, onClick}, index) => (
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
                        <LikeCounterOnMain likeCount={countLikes(data[value])} />
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default BuildingList;