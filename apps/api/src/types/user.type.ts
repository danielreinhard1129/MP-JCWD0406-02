export interface IUser {
  id: number;
  name: string;
  password: string;
  email: string;
  profile_picture: string;
  updatedAt: Date;
  createdAt: Date;
  contact: number;
  address: string;
  roleId: number;
  referral_number: string;
}

export interface ITransaction {
  id: number;
  uuid: string;
  userId: number;
  eventId: number;
  statusId: number;
  qty: number;
  paymentProof: string;
  total: number;
  createdAt: Date;
  updatedAt: Date;
}
