import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiFakeCallService } from '@core/services/api-fake-call.service';
import { SummitEventsActions } from './summit-events.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class SummitEventsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly apiFakeCallService: ApiFakeCallService
  ) {}

  loadAllSummitEvents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SummitEventsActions.loadingSummitEvents),
      exhaustMap(() =>
        this.apiFakeCallService.getEvents().pipe(
          map(summitEvents => SummitEventsActions.loadSuccessSummitEvents({ summitEvents })),
          catchError(() =>
            of(
              SummitEventsActions.loadFailureSummitEvents({
                error: 'Something went wrong and summit events could not be loaded',
              })
            )
          )
        )
      )
    )
  );
}
