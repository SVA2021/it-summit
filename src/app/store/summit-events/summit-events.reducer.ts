import { SummitEvent } from '@core/models/models';
import { createReducer, on } from '@ngrx/store';
import { SummitEventsActions } from './summit-events.actions';

export interface SummitEventsState {
  summitEvents: SummitEvent[];
  loading: boolean;
  error: string;
}

export const initialState: SummitEventsState = {
  summitEvents: [],
  loading: false,
  error: '',
};

export const summitEventsReducer = createReducer(
  initialState,
  on(SummitEventsActions.loadingSummitEvents, state => ({ ...state, loading: true })),

  on(SummitEventsActions.loadSuccessSummitEvents, (state, { summitEvents }) => ({
    ...state,
    summitEvents,
    loading: false,
  })),

  on(SummitEventsActions.loadFailureSummitEvents, (state, { error }) => ({ ...state, error, loading: false }))
);
