export interface IEvent {
  id: number;
  title: string;
  description: string;
  locationId: number;
  startDate: Date;
  endDate: Date;
  price: number;
  limit: number;
  booked: number;
  thumbnail: string;
  userId: number;
  createdAt: Date;
  updateAt: Date;
}

export interface IReview {
  id: number;
  rating: number;
  review: string;
  eventId: number;
  userId: number;
  createdat: Date;
  updateat: Date;
}
