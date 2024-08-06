import { AppState } from '@store/app.reducers';
import { createSelector } from '@ngrx/store';
import { getTotalTicketsPrice } from '@core/helpers/helpers';

export const selectBasketFeature = (state: AppState) => state.basket;

export const selectBasket = createSelector(selectBasketFeature, basket => basket);

export const selectBasketItemsQty = createSelector(selectBasket, basket => basket.length);

export const selectBasketTotalPrice = createSelector(selectBasket, basket => {
  return getTotalTicketsPrice(basket);
});
