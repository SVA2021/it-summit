import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { BasketItem } from '@core/models/models';

export const BasketActions = createActionGroup({
  source: 'Basket',
  events: {
    clearBasket: emptyProps(),
    addItemToBasket: props<{ item: BasketItem }>(),
    updateItemInBasket: props<{ item: BasketItem }>(),
    removeItemFromBasket: props<{ ticketId: number }>(),
  },
});
