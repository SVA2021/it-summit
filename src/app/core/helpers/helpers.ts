import { BasketItem, Ticket } from '@core/models/models';

export function addItemInBasket(array: BasketItem[], item: BasketItem) {
  const existingItem = array.find(i => i.ticket.id === item.ticket.id);
  if (existingItem) {
    return replaceItemInBasket(array, { ...existingItem, quantity: existingItem.quantity + item.quantity });
  } else {
    return [...array, item];
  }
}

export function replaceItemInBasket(array: BasketItem[], item: BasketItem) {
  const arrayWithoutItem = array.filter(i => i.ticket.id !== item.ticket.id);
  return [...arrayWithoutItem, item];
}

export function removeItemFromBasket(array: BasketItem[], ticketId: number): BasketItem[] {
  return array.filter(i => i.ticket.id !== ticketId);
}

export function getTotalTicketsPriceWithDiscount(item: BasketItem): number {
  const total = item.ticket.price * item.quantity;
  const discount = total * (item.ticket.discount / 100);
  return total - discount;
}

export function getTotalTicketsPrice(array: BasketItem[]): number {
  return array.reduce((acc, item) => acc + getTotalTicketsPriceWithDiscount(item), 0);
}

export function getDiscountPrice(ticket: Ticket) {
  if (ticket.discount) {
    return ticket.price - (ticket.price * ticket.discount) / 100;
  } else {
    return ticket.price;
  }
}
