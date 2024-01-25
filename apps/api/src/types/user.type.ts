export interface IUser {
  id: number;
  name: string;
  password: string;
  email: string;
  profile_picture: string;
  updateAt: Date;
  createdAt: Date;
  contact: number;
  address: string;
  roleId: number;
  referral_number: string;
}
