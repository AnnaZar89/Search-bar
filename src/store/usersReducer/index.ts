import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { api } from "../../api";

export type UsersT = {
  info?: {
    seed: string;
    page: number;
  };
  results: ResultT[];
};

enum GenderType {
  FEMALE = "female",
  MALE = "male",
}
export type ResultT = {
  gender: GenderType;
  picture: {
    large: string;
  };
  id: {
    value: string;
  };
  name: {
    first: string;
    last: string;
    title: string;
  };
  location: {
    country: string;
  };
};

interface IUserResponse {
  results: ResultT[];
}

interface IInitialState {
  users: UsersT | null;
  pending: boolean;
  resultNumber: number;
  page: number;
  seed: string;
}

interface IUsersGetUsersReq {
  resultNumber: number;
  page: number;
  seed: string;
}

const initialState: IInitialState = {
  users: null,
  pending: false,
  resultNumber: 5,
  page: 1,
  seed: "",
};

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async ({ page, resultNumber, seed }: IUsersGetUsersReq) => {
    const response = await api.get(
      `?results=${resultNumber}&seed=${seed}&page=${page}`
    );
    return response.data;
  }
);

const users = createSlice({
  name: "users",
  initialState,
  reducers: {
    addPage: (state) => {
      state.page += 1;
    },
    setSeed: (state, action: PayloadAction<string>) => {
      state.users = null;
      state.seed = action.payload;
    },
  },
  extraReducers: (build) => {
    build.addCase(getUsers.pending, (state) => {
      state.pending = true;
    });

    build.addCase(
      getUsers.fulfilled,
      (state, action: PayloadAction<IUserResponse>) => {
        state.pending = false;
        if (!state.users) {
          state.users = action.payload;
        } else {
          state.users.results = [
            ...state.users.results,
            ...action.payload.results,
          ];
        }
      }
    );

    build.addCase(getUsers.rejected, (state) => {
      state.pending = false;
      state.users = null;
    });
  },
});

export const { addPage, setSeed } = users.actions;
export default users.reducer;
