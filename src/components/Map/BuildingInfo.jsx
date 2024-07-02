import { useLocation } from "react-router-dom";
import BuildingDescription from "./BuildingDescription";
import IMAGES from "../../assets/images";
import { useQuery } from "react-query";
import { fetchAllBuildingInfo } from "../../apis/firebaseApis";
import { findBuildingKeywords } from "../../functions/finderFunctions";

const BuildingInfo = () => {
    const location = useLocation();
    const pathArray = location.pathname.split('/');
    const buildingTitle = pathArray[pathArray.length - 1];
    const { data } = useQuery("buildingInfo", fetchAllBuildingInfo);
    console.log(data);

    if (buildingTitle === 'gwanghwamun') {
        return (
            <div>
                <BuildingDescription
                    title="Gwanghwamun"
                    photo={IMAGES.gwanghwamun}
                    keywordList={findBuildingKeywords('gwanghwamun', data)}
                    description={`
                        Gwanghwamun, the main gate of Gyeonbokgung Palace, means “the enlightening influence of the king.” Unlike other palace gates, it was grandly built with a high stone base and a multi-story pavilion.
                        The gate has three arches: the central one for the king and the side ones for the crown prince and officials. A bell in the gatehouse was used to announce the time.
                        During the Japanese colonial period, Gwanghwamun was moved to make way for the Japanese General Government Building and was destroyed during the Korean War. It was relocated in 1968 but reconstructed incorrectly with reinforced concrete. The gate was fully restored to its original appearance and location in 2010.
                `} />
            </div>
        );
    } else if (buildingTitle === 'heungnyemun') {
        return (
            <div>
                <BuildingDescription
                    title="Heungnyemun"
                    photo={IMAGES.heungnyemun}
                    keywordList={findBuildingKeywords('heungnyemun', data)}
                    description={`
                        Heungnyemun, the middle gate of Gyeongbokgung Palace, means “to promote etiquette.” Originally named ‘Hongryemun,’ it was renamed in 1867 during the palace’s reconstruction. Dismantled during the Japanese colonial period, it was restored in 2001 after the demolition of the Japanese General Government Building.
                        Geumcheon stream flows from Baegaksan Mountain through the Heungnyemun area, crossed by Yeongjegyo bridge. Named during King Sejong’s reign, the bridge survived the Japanese invasions of Korea. It was repaired in 1867, dismantled during the colonial period, and restored in 2001.
                `} />
            </div>
        );
    } else if (buildingTitle === 'geunjeongmun') {
        return (
            <div>
                <BuildingDescription
                    title="Geunjeongmun"
                    photo={IMAGES.geunjeongmun}
                    keywordList={findBuildingKeywords('geunjeongmun', data)}
                    description={`
                        Geunjeongmun is the main gate of Geunjeongjeon Hall, unique for its two-story Ujingak-style roof
                        with three front bays and two side bays. It hosted the enthronement ceremonies of Kings Danjong,
                        Seongjong, and Myeongjong during royal funerals. In 1985, Geunjeongmun and its surrounding
                        buildings were designated as a treasure.
                        Heungnyemun, the middle gate of Gyeongbokgung Palace, means “to promote etiquette.” Originally named ‘Hongryemun,’ it was renamed in 1867 during the palace’s reconstruction. Dismantled during the Japanese colonial period, it was restored in 2001 after the demolition of the Japanese General Government Building.
                        Geumcheon stream flows from Baegaksan Mountain through the Heungnyemun area, crossed by Yeongjegyo bridge. Named during King Sejong’s reign, the bridge survived the Japanese invasions of Korea. It was repaired in 1867, dismantled during the colonial period, and restored in 2001.
                `} />
            </div>
        );
    } else if (buildingTitle === 'geunjeongjeon') {
        return (
            <div>
                <BuildingDescription
                    title="Geunjeongjeon"
                    photo={IMAGES.geunjeongjeon}
                    keywordList={findBuildingKeywords('geunjeongjeon', data)}
                    description={`
                    Geunjeongjeon is the central hall for significant state events like coronations and official receptions. Its name, ‘Geunjeong,’ symbolizes diligent governance, making it the palace’s largest and most formal structure. Built on a two-tiered stone platform, Geunjeongjeon stands gracefully, with a two-story layout creating a spacious, unified interior. The front courtyard, ‘Jojjeong,’ maintains the palace’s ceremonial ambiance with its stone slab paving and central pathways like ‘Samdo.’ Intricately carved stone pillars and railings around the platform add artistic flair, featuring symbols such as the Four Guardian Deities and the Twelve Zodiac Animals. Inside, the floor is laid with bricks, and the king’s throne sits at the northern center. Geunjeongjeon has witnessed the enthronements of several kings, earning its designation as a national treasure in 1985.
                    `}
                />
            </div>
        );
    } else if (buildingTitle === 'sajeongjeon') {
        return (
            <div>
                <BuildingDescription
                    title="Sajeongjeon"
                    photo={IMAGES.sajeongjeon}
                    keywordList={findBuildingKeywords('sajeongjeong', data)}
                    description={`
                    Sajeongjeon, meaning ‘thoughtful governance,’ was the king’s official workplace for daily affairs with
officials. It hosted morning briefings, meetings, and discussions. Inside, like Geunjeongjeon, was the
king’s throne, with a grand screen painting, ‘Irworobongdo,’ behind it symbolizing royal authority.
Flanking Sajeongjeon are Manchunjeon (Manchun: perpetual spring) and Cheonchujeon (Cheonchu:
thousand autumns), auxiliary buildings with underfloor heating for year-round use. Originally
connected by corridors, they were later reconstructed as separate structures during King Gojong’s
reign.
                    `} />
            </div>
        );
    } else if (buildingTitle === 'sujeongjeon') {
        return (
            <div>
                <BuildingDescription
                    title="Sujeongjeon"
                    photo={IMAGES.sujeongjeon}
                    keywordList={findBuildingKeywords('sujeongjeon', data)}
                    description={`
                    Sujeongjeon, meaning of ‘Hall of Good Governance,’ was King Gojong’s study hall. Built during his
reign, it housed the Military Affairs Office during the Gabo Reform in 1894 and later became the
Cabinet building. Nearby, Jiphyeonjeon was where King Sejong created the Korean script, and
Sujeongjeon was designated a treasure in 2012.
                    `}/>
            </div>
        );
    } else if (buildingTitle === 'gyeonghoeru') {
        return (
            <div>
                <BuildingDescription
                    title="Gyeonghoeru"
                    photo={IMAGES.gyeonghoeru}
                    keywordList={findBuildingKeywords('gyeonghoeru', data)}
                    description={`
                    Gyeonghoeru, the “Pavilion of Joyous Gatherings,” sits within a pond on the western side of
Gyeonbokgung Palace. It was where the king hosted lavish banquets and entertained foreign
dignitaries. Originally modest, it was expanded in 1412 during King Taejong’s reign. Destroyed
during the Japanese invasion, it was rebuilt in 1867. The pavilion’s first floor has 48 high stone
columns, while the second floor served as a banquet hall. Gyeonghoeru was designated a national
treasure in 1985.
                    `}
                />
            </div>
        );
    } else if (buildingTitle === 'hyangwonjeong') {
        return (
            <div>
                <BuildingDescription
                    title="Hyangwonjeong"
                    photo={IMAGES.hyangwonjeong}
                    keywordList={findBuildingKeywords('hyangwonjeong', data)}
                    description={`
                    Hyangwonjeong, meaning “fragrance drifting far,” was originally the site of Chwirojeong, built during
King Sejo’s reign. In 1873, King Gojong created an island in the middle of a pond and constructed
Hyangwonjeong as its center. The bridge leading to it was named Chwihyanggyo, “intoxicated by
fragrance.” Destroyed during the Korean War, it was restored in 1953. Yeolsangjinwon spring, the
source of Hyangwonji’s water, lies northwest. Hyangwonjeong was designated a treasure in 2012
                    `}/>
            </div>
        );
    } else if (buildingTitle === 'gangnyeongjeon') {
        return (
            <div>
                <BuildingDescription
                    title="Gangnyeongjeon"
                    photo={IMAGES.gangnyeongjeon}
                    keywordList={findBuildingKeywords('gangnyeongjeon', data)}
                    description={`
                    Gangnyeongjeon was the king and queen’s daily residence alongside Gyotaejeon. Its name,
‘Gangnyeong,’ implies peace and well-being. Here, the king managed routine tasks and held
confidential discussions with courtiers. Shaped like the Chinese character '井,' it had nine rooms,
with the central one for the king and the rest for court ladies. After a fire in 1917 destroyed
Changdeokgung Palace’s main buildings, including Daejojeon and Huijeongdang, Gangnyeongjeon
was moved for the latter’s restoration. The current Gangnyeongjeon, restored in 1995, is now
surrounded by its annexes: Gyeongseongjeon, Yeonsaengjeon, Eungjidang, and Yeongildang.
                    `}/>
            </div>
        );
    } else if (buildingTitle === 'jagyeongjeon') {
        return (
            <div>
                <BuildingDescription
                    title="Jagyeongjeon"
                    photo={IMAGES.jagyeongjeon}
                    keywordList={findBuildingKeywords('jagyeongjeon', data)}
                    description={`
                    Jagyeongjeon is named for “receiving a mother’s blessings,” originating from Jagyeongdang in
Changgyeonggung Palace. Built by King Gojong in 1867 to honor Queen Sinjeong, it was rebuilt in
1888 after a fire. Surrounding Jagyeongjeon are interconnected annexes like Bokandang,
Cheongyeonru, and Hyeopgyeongdang. Jagyeongjeon’s ondol rooms connect to eight chimneys,
each adorned with symbols of longevity. Designated a treasure in 1985, its chimneys are renowned
for both functionality and beauty.
                    `}/>
            </div>
        );
    } else if (buildingTitle === 'jibokjae') {
        return (
            <div>
                <BuildingDescription
                    title="Jibokjae"
                    photo={IMAGES.jibokjae}
                    keywordList={findBuildingKeywords('jibokjae', data)}
                    description={`
                    Jibokjae, meaning “Gathering Precious Treasures.” Is the central building flanked by Palujung on the
left and Hyupgildang on the right. Moved to the west side of Geoncheonggung Palace in 1891
during King Gojong’s reign, it served as his study and a meeting place for foreign envoys. Unlike
other structures in Gyeongbokgung Palace, Jibokjae is built in the Quing Dynasty style, featuring
two stories internally while appearing single-story externally. Palujung, an octangonal pavilion,
showcases intricate floral carvings and glass windows. Hyupgildang, a Joseon-style building, housed 
ondol rooms for relaxation. Connected by corridors, Jibokjae stands out with its vertically oriented
plaque, a unique feature in Gyeongbokgung Palace.
                    `}/>
            </div>
        );
    } else if (buildingTitle === 'gyotaejeon') {
        return (
            <div>
                <BuildingDescription
                    title="Gyotaejeon"
                    photo={IMAGES.gyotaejeon}
                    keywordList={findBuildingKeywords('gyotaejeon', data)}
                    description={`
                    Gyotaejeon, serving as both the royal residence and specifically the queen’s living quarters,
embodies harmony and tranquility. Though not part of the original palace, it’s believed to have
been built around 1440 during King Sejong’s reign. Relocated after a fire at Changdeokgung Palace
in 1917, it was reconstructed in 1995. Adjacent buildings include Heumkyeonggak for astronomy
and Hamwonjeon for Buddhist rituals. Behind Gyotaejeon lies Amisan, a graden adorned with tiered
flower beds and four chimneys engraved with hexagonal patterns, symbolizing protection and
longevity. Designated a treasure in 1985, Amisan enhances the palace’s allure.
                    `}/>
            </div>
        );
    } else {
        return null;
    }
};

export default BuildingInfo;