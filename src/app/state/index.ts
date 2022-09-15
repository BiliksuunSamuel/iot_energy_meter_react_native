import {IResponseReducer, IUserReducer} from './IState';

export const ResponseReducerState: IResponseReducer = {
  loading: false,
  message: null,
  error: null,
};

export const UserReducerState: IUserReducer = {
  user: null,
};
