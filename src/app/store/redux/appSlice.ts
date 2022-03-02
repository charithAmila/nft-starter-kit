import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import nfts from "../../utils/data/nft.json";

export interface NFTItemInterface {
  id: number | string;
  name: string;
  url: string;
  price: number | string;
  userId?: string | null;
}

export interface AppSliceInterface {
  nftItems: NFTItemInterface[];
}

const initialState: AppSliceInterface = {
  nftItems: nfts,
};

export const appSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setNFTItems: (state, action: PayloadAction<NFTItemInterface[]>) => {
      state.nftItems = action.payload;
    },
  },
});

export const { setNFTItems } = appSlice.actions;

export default appSlice.reducer;
