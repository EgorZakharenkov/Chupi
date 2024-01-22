import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "@/constants/axiosBase";

export const FetchMusic = createAsyncThunk("music/fetchMusic", async () => {
  const data = await api.get("/music");
  return data;
});

export const FetchRemoveMusic = createAsyncThunk(
  "posts/FetchRemovePost",
  async (_id: number) => {
    await api.delete(`/music/${_id}`);
  },
);

export type MusicItems = {
  _id: number;
  songName: string;
  song: string;
  artist: string;
  imgSong: string;
  duration: number;
  favorite: boolean;
  viewSong: number;
};
export type CurrentTrackVolume = {
  volume: number;
};
interface MusicSliceState {
  musics: {
    items: MusicItems[];
    itemsFavorite: MusicItems[];
    itemsDefault: MusicItems[];
    item: MusicItems | null;
    category: string;
    status: string;
    index: number;
    currentTrackVolume: CurrentTrackVolume;
  };
}

const initialState: MusicSliceState = {
  musics: {
    items: [],
    itemsDefault: [],
    itemsFavorite: [],
    item: null,
    category: "Songs",
    status: "loading",
    index: 0,
    currentTrackVolume: {
      volume: 1,
    },
  },
};

export const MusicSlice = createSlice({
  name: "MusicSlice",
  initialState,
  reducers: {
    CurrentItem: (state, action: PayloadAction<MusicItems>) => {
      state.musics.item = action.payload;
    },
    SetCurrentTrack: (state, action: PayloadAction<CurrentTrackVolume>) => {
      state.musics.currentTrackVolume = action.payload;
    },
    PrevTrack: (state) => {
      state.musics.index =
        (state.musics.index + state.musics.items.length - 1) %
        state.musics.items.length;
      state.musics.item = state.musics.items[state.musics.index];
    },
    NextTrack: (state) => {
      state.musics.index = (state.musics.index + 1) % state.musics.items.length;
      state.musics.item = state.musics.items[state.musics.index];
    },
    SetPopularTracks: (state) => {
      state.musics.items = state.musics.items.sort((a, b) =>
        a.viewSong > b.viewSong ? -1 : 1,
      );
    },
    SearchTrack: (state, action: PayloadAction<string>) => {
      state.musics.items = state.musics.itemsDefault.filter((song) => {
        return song.songName
          .toLowerCase()
          .includes(action.payload.toLowerCase());
      });
    },
    Category: (state, action) => {
      state.musics.category = action.payload;
    },
    CurrentIndex: (state, action) => {
      state.musics.index = action.payload;
    },
    DefaultTracks: (state) => {
      state.musics.items = state.musics.itemsDefault;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(FetchMusic.pending, (state, action) => {
      state.musics.status = "loading";
    });
    builder.addCase(FetchMusic.fulfilled, (state, action) => {
      state.musics.items = action.payload.data.items;
      state.musics.status = "loaded";
      state.musics.itemsDefault = action.payload.data.items;
    });
    builder.addCase(FetchMusic.rejected, (state) => {
      state.musics.status = "error";
      state.musics.items = [];
      state.musics.itemsDefault = [];
    });
  },
});

export const {
  CurrentItem,
  CurrentIndex,
  Category,
  SetCurrentTrack,
  SetPopularTracks,
  SearchTrack,
  DefaultTracks,
  PrevTrack,
  NextTrack,
} = MusicSlice.actions;
export default MusicSlice.reducer;
