import { Sheet } from "react-modal-sheet";
import { Box, CircularProgress, Drawer, Toolbar } from "@mui/material";
import { useOutlet, Outlet } from "react-router-dom";
import InteractiveMap from "./InteractiveMap";
import { Suspense, lazy, useRef } from "react";

// Lazily load the BuildingList component
const BuildingList = lazy(() => import("./BuildingList"));

const BETWEEN_TOP_AND_SHEET = 50;

const MobileMap = () => {
    const outlet = useOutlet();
    const sheetRef = useRef(null);
    const contentRef = useRef(null);

    // snapPoints for the Sheet component
    const snapPoints = [-50, 350, 50];

    return (
        <div>
            <InteractiveMap isMobile />
            <Sheet
                id="top-sheet"
                isOpen
                snapPoints={snapPoints}
                initialSnap={1}
                ref={sheetRef}
                onClose={() => {}}
                onAbort={() => {}}
                onSnap={() => {}}
                detent="content-height"
            >
                <Sheet.Container>
                    <Sheet.Header />
                    <Sheet.Content>
                        <Sheet.Scroller draggableAt="bottom">
                            <Box ref={contentRef}>
                                {outlet ? (
                                    <Outlet />
                                ) : (
                                    <Suspense fallback={<CircularProgress />}>
                                        <BuildingList />
                                    </Suspense>
                                )}
                            </Box>
                        </Sheet.Scroller>
                    </Sheet.Content>
                </Sheet.Container>
            </Sheet>
        </div>
    );
}

export default MobileMap;
