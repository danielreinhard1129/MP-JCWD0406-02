export interface IUser {
  id: number;
  username: string;
  fullName: string;
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
