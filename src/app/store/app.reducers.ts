import { summitEventsReducer, SummitEventsState } from './summit-events/summit-events.reducer';
import { Action, ActionReducer } from '@ngrx/store';
import { ticketsReducer, TicketsState } from './tickets/tickets.reducer';
import { basketReducer, BasketState } from '@store/basket/basket.reducer';

export interface AppState {
  basket: BasketState;
  summitEvents: SummitEventsState;
  tickets: TicketsState;
}

export interface AppStore {
  basket: ActionReducer<BasketState, Action>;
  summitEvents: ActionReducer<SummitEventsState, Action>;
  tickets: ActionReducer<TicketsState, Action>;
}

export const appStore: AppStore = {
  basket: basketReducer,
  summitEvents: summitEventsReducer,
  tickets: ticketsReducer,
};
