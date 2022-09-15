import {ResponseReducerState} from './../../app/state/index';
import {createSlice} from '@reduxjs/toolkit';
import {LoginThunk, RegisterThunk} from '../../functions/auth';

const ResponseReducer = createSlice({
  name: 'ResponseReducer',
  initialState: ResponseReducerState,
  reducers: {
    clearResponse: (state) => {
      state = ResponseReducerState;
    },
    handleError: (s, a) => {
      s.error = a.payload;
      s.loading = false;
      s.message = null;
    },
    handleSuccess: (s, a) => {
      s.error = null;
      s.loading = false;
      s.message = a.payload;
    },
    handlePending: (s) => {
      s.loading = true;
      s.error = null;
      s.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(LoginThunk.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.message = null;
      })
      .addCase(LoginThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.message = null;
      })
      .addCase(RegisterThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(RegisterThunk.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.message = null;
      })
      .addCase(RegisterThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.message = null;
      });
  },
});

export default ResponseReducer.reducer;
export const {handleError, handlePending, handleSuccess, clearResponse} =
  ResponseReducer.actions;
