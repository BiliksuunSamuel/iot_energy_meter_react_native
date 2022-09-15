import UserModel from '../../models/UserModel';

export interface IResponseReducer {
  loading: boolean;
  error: any;
  message: any;
}

export interface IUserReducer {
  user: UserModel | null;
}
