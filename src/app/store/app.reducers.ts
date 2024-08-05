import { summitEventsReducer, SummitEventsState } from './summit-events/summit-events.reducer';
import { Action, ActionReducer } from '@ngrx/store';

export interface AppState {
  summitEvents: SummitEventsState;
}

export interface AppStore {
  summitEvents: ActionReducer<SummitEventsState, Action>;
}

export const appStore: AppStore = {
  summitEvents: summitEventsReducer,
};
