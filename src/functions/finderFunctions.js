export const findBuildingKeywords = (buildingId, docList) => {
    const keywordsObj =  docList.find(({id}) => id === buildingId)?.keywords || {} ;
    return Object.keys(keywordsObj);
}