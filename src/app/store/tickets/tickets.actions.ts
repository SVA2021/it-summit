import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Ticket } from '@core/models/models';

export const TicketsActions = createActionGroup({
  source: 'Tickets',
  events: {
    loadingTickets: emptyProps(),
    loadSuccessTickets: props<{ tickets: Ticket[] }>(),
    loadFailureTickets: props<{ error: string }>(),
  },
});
