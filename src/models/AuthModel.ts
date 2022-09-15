import PersonModel from './PersonModel';

export default interface AuthModel extends PersonModel {
  password: string;
}

export const InitialAuthModelInfo: AuthModel = {
  name: '',
  phone: '',
  password: '',
  role: 0,
  status: 1,
};
