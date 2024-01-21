export interface IEvent {
  id: number;
  event_name: string;
  category: string;
  banner: string;
  description: string;
  createdAt: Date;
  dateTime: string;
  location: string;
  ticketType: string;
  price: number;
  availableSeat: number;
  codeVoucher: string;
  nominalVoucher: number;
}
