import { useLocation } from "react-router-dom";

const BuildingInfo = () => {
    const location = useLocation();
    const pathArray = location.pathname.split('/');
    const buildingTitle = pathArray[pathArray.length - 1]; 

    if (buildingTitle === 'heungnyemun') {
        return (
        <div>
            {buildingTitle}
        </div>
        );
    } else {
        return null;
    }
}

export default BuildingInfo;