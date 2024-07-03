import { Box, CircularProgress, Drawer, Toolbar } from "@mui/material";
import { useOutlet, Outlet } from "react-router-dom";
import BuildingList from "./BuildingList";
import MobileMap from "./MobileMap";
import useIsMobile from "../../hooks/useIsMobile";
import InteractiveMap from "./InteractiveMap";
import { Suspense } from "react";


export const drawerWidth = 500;

export const Map = () => {
    const outlet = useOutlet();
    const isMobile = useIsMobile();

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
                    {outlet
                    ? <Outlet />
                    : (
                        <Suspense fallback={<CircularProgress />}>
                            <BuildingList />
                        </Suspense>
                    )}
                </Drawer>
                <Box>
                    <InteractiveMap drawerWidth={drawerWidth} />
                </Box>
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
