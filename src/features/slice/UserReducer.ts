import {createSlice} from '@reduxjs/toolkit';
import {UserReducerState} from '../../app/state';
import {LoginThunk, RegisterThunk} from '../../functions/auth';

const UserReducer = createSlice({
  name: 'UserReducer',
  initialState: UserReducerState,
  reducers: {
    handleLout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginThunk.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(RegisterThunk.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export default UserReducer.reducer;
export const {} = UserReducer.actions;
