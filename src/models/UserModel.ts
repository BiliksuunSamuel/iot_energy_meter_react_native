import PersonModel from './PersonModel';

export default interface UserModel extends PersonModel {
  _id: string;
}
