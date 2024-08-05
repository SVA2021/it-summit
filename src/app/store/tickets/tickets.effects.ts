import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiFakeCallService } from '@core/services/api-fake-call.service';
import { TicketsActions } from './tickets.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class TicketsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly apiFakeCallService: ApiFakeCallService
  ) {}

  loadTickets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TicketsActions.loadingTickets),
      exhaustMap(() =>
        this.apiFakeCallService.getTickets().pipe(
          map(tickets => TicketsActions.loadSuccessTickets({ tickets })),
          catchError(() =>
            of(
              TicketsActions.loadFailureTickets({
                error: 'Something went wrong and tickets could not be loaded',
              })
            )
          )
        )
      )
    )
  );
}
