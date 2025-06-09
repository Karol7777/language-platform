import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  name: string;
  level: number;
}

const initialState: UserState = {
  name: '',
  level: 1,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    incrementLevel(state) {
      state.level += 1;
    },
  },
});

export const { setName, incrementLevel } = userSlice.actions;
export default userSlice.reducer;
