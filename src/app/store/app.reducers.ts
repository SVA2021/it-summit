import { summitEventsReducer, SummitEventsState } from './summit-events/summit-events.reducer';
import { Action, ActionReducer } from '@ngrx/store';
import { ticketsReducer, TicketsState } from './tickets/tickets.reducer';

export interface AppState {
  summitEvents: SummitEventsState;
  tickets: TicketsState;
}

export interface AppStore {
  summitEvents: ActionReducer<SummitEventsState, Action>;
  tickets: ActionReducer<TicketsState, Action>;
}

export const appStore: AppStore = {
  summitEvents: summitEventsReducer,
  tickets: ticketsReducer,
};
