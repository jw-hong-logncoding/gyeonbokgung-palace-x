
import { useNavigate } from "react-router-dom";
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import FortIcon from '@mui/icons-material/Fort';

const BuildingList = () => {
    const navigate = useNavigate();
    const archiList = [
        {title: "Heungnyemun (흥례문)", onClick: () => {navigate('/map/heungnyemun')}},
    ];

    return (
        <Box sx={{ overflow: 'auto' }}>
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