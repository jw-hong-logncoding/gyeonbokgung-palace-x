import { Sheet } from "react-modal-sheet";
import BuildingList from "./BuildingList";
import { Outlet, useOutlet } from "react-router-dom";
import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import { parseTranslateY } from "../../functions/stringFunctions";

const BETWEEN_TOP_AND_SHEET = 50;

const MobileMap = () => {
    const outlet = useOutlet();
    const sheetRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const targetElement = document.querySelector('#top-sheet > *');

        const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'style') {
            const newValue = targetElement.style.transform;
            const integer = Math.ceil(parseTranslateY(newValue));
            contentRef.current.style.height = (window.innerHeight-integer-BETWEEN_TOP_AND_SHEET-40)+"px";
            }
            });
        });

        const config = { attributes: true, attributeFilter: ['style'] };
        observer.observe(targetElement, config);
        }, []);

    const snapPoints = [-BETWEEN_TOP_AND_SHEET, 600, 400, 30];

    return (
        <div>
            <Sheet
                id="top-sheet"
                isOpen
                snapPoints={snapPoints}
                initialSnap={1}
                onClose={() => {}}
                ref={sheetRef}
                detent="content-height"
            >
                <Sheet.Container>

                    <Sheet.Header />
                        <Sheet.Content>
                            <Box sx={{height: window.innerHeight-BETWEEN_TOP_AND_SHEET-40}}>
                                <Box
                                    ref={contentRef}
                                    sx={{ overflowY: "auto" }}
                                >
                                    {outlet ? <Outlet /> : <BuildingList />}
                                </Box>
                            </Box>
                        </Sheet.Content>
                </Sheet.Container>
            </Sheet>
        </div>
    )
}

export default MobileMap;