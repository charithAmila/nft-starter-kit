import { useSelector } from "react-redux";
import { RootState } from "../store";

const useNFTData = () => {
  const { nftItems } = useSelector((state: RootState) => state.app);
  const getFeaturedData = () => nftItems.slice(0, 4);
  const getLastItem = () => nftItems[nftItems.length - 1];

  const getData = (itemId: string) =>
    nftItems.find(({ id }) => Number(itemId) === Number(id)) || null;
  return { getFeaturedData, getData, getLastItem };
};

export default useNFTData;
