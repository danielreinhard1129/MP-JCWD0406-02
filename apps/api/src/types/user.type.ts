export interface Iuser {
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
  role: string
}

export interface IuserRole {
  userId: number;
  role: string
}