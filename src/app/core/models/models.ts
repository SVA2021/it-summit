export interface SummitEvent {
  id: number;
  name: string;
  startDate: string;
  stopDate: string;
  description: string;
  imageUrl: string;
  isFinished: boolean;
  address: string;
  coordinates: [number, number] | null;
}

export type TicketType = 'vip' | 'comfort' | 'standard';

export interface Ticket {
  id: number;
  eventId: number;
  type: TicketType;
  price: number;
  discount: number;
  availableQty: number;
  features: string[];
}

export interface BasketItem {
  ticket: Ticket,
  quantity: number;
}
