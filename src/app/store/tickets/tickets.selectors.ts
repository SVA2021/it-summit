import { AppState } from '../app.reducers';
import { createSelector } from '@ngrx/store';

export const selectTicketsFeature = (state: AppState) => state.tickets;

export const selectTickets = createSelector(selectTicketsFeature, tickets => tickets.tickets);

export const selectTicketsLoading = createSelector(selectTicketsFeature, tickets => tickets.loading);

export const selectTicketsError = createSelector(selectTicketsFeature, tickets => tickets.error);

export const selectTicketById = (id: number) =>
  createSelector(selectTickets, tickets => tickets.find(ticket => ticket.id === id));

export const selectTicketsByEventId = (eventId: number) =>
  createSelector(selectTickets, tickets => tickets.filter(ticket => ticket.eventId === eventId))
