import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { SummitEvent } from '@core/models/models';

export const SummitEventsActions = createActionGroup({
  source: 'Summit Events',
  events: {
    loadingSummitEvents: emptyProps(),
    loadSuccessSummitEvents: props<{ summitEvents: SummitEvent[] }>(),
    loadFailureSummitEvents: props<{ error: string }>(),
  },
});
