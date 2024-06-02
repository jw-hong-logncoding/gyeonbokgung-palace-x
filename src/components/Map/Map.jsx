import { Drawer, Toolbar } from "@mui/material";
import { useOutlet, Outlet } from "react-router-dom";
import BuildingList from "./BuildingList";


const drawerWidth = 500;

const Map = () => {
    const outlet = useOutlet();
    return (
        <div>
            <Drawer
                anchor="right"
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                {outlet ? <Outlet /> : <BuildingList />}
            </Drawer>
        </div>
    )
}

export default Map;