
import { useNavigate } from "react-router-dom";
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import FortIcon from '@mui/icons-material/Fort';

const BuildingList = () => {
    const navigate = useNavigate();
    const archiList = [
        {title: "Gwanghwamun (광화문)", onClick: () => {navigate('/map/gwanghwamun')}},
        {title: "Heungnyemun (흥례문)", onClick: () => {navigate('/map/heungnyemun')}},
        {title: "Geunjeongmun (근정문)", onClick: () => {navigate('/map/geunjeongmun')}},
        {title: "Geunjeongjeon (근정전)", onClick: () => {navigate('/map/geunjeongjeon')}},
        {title: "Sajeongjeon (사정전)", onClick: () => {navigate('/map/sajeongjeon')}},
        {title: "Sujeongjeon (수정전)", onClick: () => {navigate('/map/sujeongjeon')}},
        {title: "Gyeonghoeru (경회루)", onClick: () => {navigate('/map/gyeonghoeru')}},
        {title: "Hyangwonjeong (향원정)", onClick: () => {navigate('/map/hyangwonjeong')}},
        {title: "Gangnyeongjeon (강녕전)", onClick: () => {navigate('/map/gangnyeongjeon')}},
        {title: "Jagyeongjeon (자경전)", onClick: () => {navigate('/map/jagyeongjeon')}},
        {title: "Jibokjae (집옥재)", onClick: () => {navigate('/map/jibokjae')}},
        {title: "Gyotaejeon (교태전)", onClick: () => {navigate('/map/gyotaejeon')}},
    ];

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
                    Building
                </Typography>
            </Box>
            <Divider />
            <List>
                {archiList.map(({title, onClick}, index) => (
                <ListItem key={index} disablePadding>
                    <ListItemButton
                        onClick={onClick}
                    >
                        <ListItemIcon>
                            <FortIcon />
                        </ListItemIcon>
                        <ListItemText primary={title} />
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default BuildingList;