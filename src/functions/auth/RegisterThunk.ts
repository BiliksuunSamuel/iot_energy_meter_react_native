import {PostRoutes} from './../../api/index';
import {createAsyncThunk} from '@reduxjs/toolkit';
import controller from '../../controller';
import UserModel from '../../models/UserModel';

export default createAsyncThunk('api/user/register', async (data: any) => {
  try {
    return await controller.Post<UserModel>({
      url: PostRoutes.user_register,
      data,
    });
  } catch (error) {
    throw error;
  }
});
