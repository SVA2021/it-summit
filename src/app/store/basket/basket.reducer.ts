import { BasketItem } from '@core/models/models';
import { createReducer, on } from '@ngrx/store';
import { BasketActions } from '@store/basket/basket.actions';
import {addItemInBasket, removeItemFromBasket, replaceItemInBasket} from '@core/helpers/helpers';

export type BasketState = BasketItem[];

export const initialState: BasketState = [];

export const basketReducer = createReducer(
  initialState,
  on(BasketActions.addItemToBasket, (state, { item }) => addItemInBasket(state, item)),
  on(BasketActions.updateItemInBasket, (state, { item }) => replaceItemInBasket(state, item)),
  on(BasketActions.removeItemFromBasket, (state, { ticketId }) => removeItemFromBasket(state, ticketId)),
  on(BasketActions.clearBasket, () => [])
);
