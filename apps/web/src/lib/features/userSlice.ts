import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  id: number;
  fullName: string;
  email: string;
  roleId: number
}

const initialState: UserState = {
  id: 0,
  fullName: '',
  email: '',
  roleId: 0
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginAction: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.fullName = action.payload.fullName;
      state.email = action.payload.email;
      state.roleId = action.payload.roleId
    },
    logoutAction: (state) => {
      state.id = 0;
      state.fullName = '';
      state.email = '';
    },
  },
});

export const { loginAction, logoutAction } = userSlice.actions;

export default userSlice.reducer;
