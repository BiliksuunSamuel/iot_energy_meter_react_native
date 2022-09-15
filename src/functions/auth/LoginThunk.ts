import {createAsyncThunk} from '@reduxjs/toolkit';
import {PostRoutes} from '../../api';
import controller from '../../controller';
import UserModel from '../../models/UserModel';

export default createAsyncThunk('api/user/login', async (data: any) => {
  try {
    return await controller.Post<UserModel>({url: PostRoutes.user_login, data});
  } catch (error) {
    throw error;
  }
});
