import { useLocation } from "react-router-dom";
import BuildingDescription from "./BuildingDescription";
import IMAGES from "../../assets/images";

const BuildingInfo = () => {
    const location = useLocation();
    const pathArray = location.pathname.split('/');
    const buildingTitle = pathArray[pathArray.length - 1];

    if (buildingTitle === 'gwanghwamun') {
        return (
            <div>
                <BuildingDescription
                    title="Gwanghwamun"
                    photo=""
                    keywordList={['Pond', 'Nature']}
                    description={`
                        Heungnyemun, the middle gate of Gyeongbokgung Palace, means “to promote etiquette.” Originally
                        named ‘Hongryemun,’ it was renamed in 1867 during the palace’s reconstruction. Dismantled during
                        the Japanese colonial period, it was restored in 2001 after the demolition of the Japanese General
                        Government Building.
                        Geumcheon stream flows from Baegaksan Mountain through the Heungnyemun area, crossed by
                        Yeongjegyo bridge. Named during King Sejong’s reign, the bridge survived the Japanese invasions
                        of Korea. It was repaired in 1867, dismantled during the colonial period, and restored in 2001.
                `} />
            </div>
        );
    } else if (buildingTitle === 'heungnyemun') {
        return (
            <div>
                <BuildingDescription
                    title="Heungnyemun"
                    photo={IMAGES.heungnyemun}
                    keywordList={['Nature']}
                    description={`
                        Heungnyemun, the middle gate of Gyeongbokgung Palace, means “to promote etiquette.” Originally named ‘Hongryemun,’ it was renamed in 1867 during the palace’s reconstruction. Dismantled during the Japanese colonial period, it was restored in 2001 after the demolition of the Japanese General Government Building.
                        Geumcheon stream flows from Baegaksan Mountain through the Heungnyemun area, crossed by Yeongjegyo bridge. Named during King Sejong’s reign, the bridge survived the Japanese invasions of Korea. It was repaired in 1867, dismantled during the colonial period, and restored in 2001.
                `} />
            </div>
        );
    } else if (buildingTitle === 'geunjeongmun') {
        return (
            <div>
                {buildingTitle}
            </div>
        );
    } else if (buildingTitle === 'geunjeongjeon') {
        return (
            <div>
                {buildingTitle}
            </div>
        );
    } else if (buildingTitle === 'sajeongjeon') {
        return (
            <div>
                {buildingTitle}
            </div>
        );
    } else if (buildingTitle === 'sujeongjeon') {
        return (
            <div>
                {buildingTitle}
            </div>
        );
    } else if (buildingTitle === 'gyeonghoeru') {
        return (
            <div>
                {buildingTitle}
            </div>
        );
    } else if (buildingTitle === 'hyangwonjeong') {
        return (
            <div>
                {buildingTitle}
            </div>
        );
    } else if (buildingTitle === 'gangnyeongjeon') {
        return (
            <div>
                {buildingTitle}
            </div>
        );
    } else if (buildingTitle === 'jagyeongjeon') {
        return (
            <div>
                {buildingTitle}
            </div>
        );
    } else if (buildingTitle === 'jibokjae') {
        return (
            <div>
                {buildingTitle}
            </div>
        );
    } else if (buildingTitle === 'gyotaejeon') {
        return (
            <div>
                {buildingTitle}
            </div>
        );
    } else {
        return null;
    }
};

export default BuildingInfo;