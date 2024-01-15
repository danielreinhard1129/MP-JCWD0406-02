export interface IUser {
  id: number;
  username: string;
  fullName: string;
  password: string;
  email: string;
  profile_picture: string;
  point_balance: number;
  updateAt: Date;
  createdAt: Date;
  contact: number;
  address: string;
  roleId: number
}
