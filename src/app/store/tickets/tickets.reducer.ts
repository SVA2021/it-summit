import { Ticket } from '@core/models/models';
import { TicketsActions } from './tickets.actions';
import { createReducer, on } from '@ngrx/store';

export interface TicketsState {
  tickets: Ticket[];
  loading: boolean;
  error: string;
}

export const initialState: TicketsState = {
  tickets: [],
  loading: false,
  error: '',
};

export const ticketsReducer = createReducer(
  initialState,
  on(TicketsActions.loadingTickets, state => ({ ...state, loading: true })),
  on(TicketsActions.loadSuccessTickets, (state, { tickets }) => ({
    ...state,
    tickets,
    loading: false,
  })),
  on(TicketsActions.loadFailureTickets, (state, { error }) => ({ ...state, error, loading: false }))
);
