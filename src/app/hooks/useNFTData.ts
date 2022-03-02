import nfts from "../utils/data/nft.json";

const useNFTData = () => {
  const getFeaturedData = () => nfts.slice(0, 4);
  const getAllData = () => nfts;
  const getData = (itemId: string) =>
    nfts.find(({ id }) => Number(itemId) === Number(id)) || null;
  return { getFeaturedData, getAllData, getData };
};

export default useNFTData;
