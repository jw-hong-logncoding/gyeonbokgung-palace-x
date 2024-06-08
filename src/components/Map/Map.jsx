import { Drawer, Toolbar } from "@mui/material";
import { useOutlet, Outlet } from "react-router-dom";
import BuildingList from "./BuildingList";
import { isMobile } from "react-device-detect";
import MobileMap from "./MobileMap";

export const drawerWidth = 500;

export const Map = () => {
    const outlet = useOutlet();

    if (!isMobile) {
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
        );
    }
    return (
        <>
            <MobileMap />
        </>
    );
};

export default Map;