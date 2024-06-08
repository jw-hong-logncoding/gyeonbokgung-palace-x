import { Sheet } from "react-modal-sheet";
import BuildingList from "./BuildingList";
import { Outlet, useOutlet } from "react-router-dom";


const MobileMap = () => {
    const outlet = useOutlet();
    return (
        <div>
            <Sheet
                isOpen
                snapPoints={[1000, 600, 400, 30]}
                initialSnap={1}
                onClose={() => {}}
            >
                <Sheet.Container>
                    <Sheet.Header />
                        <Sheet.Content>
                    <Sheet.Scroller draggableAt="both">
                            {outlet ? <Outlet /> : <BuildingList />}
                    </Sheet.Scroller>
                        </Sheet.Content>
                </Sheet.Container>
            </Sheet>
        </div>
    )
}

export default MobileMap;