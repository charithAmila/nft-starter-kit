import { NFTItemInterface } from "../store/redux/appSlice";

export const searchNFTByName = (nftItems: NFTItemInterface[], text: string) => {
  if (!text) {
    return nftItems;
  }
  const searchText = text.toLowerCase();
  return nftItems.filter(({ name }) => name.toLowerCase().includes(searchText));
};
