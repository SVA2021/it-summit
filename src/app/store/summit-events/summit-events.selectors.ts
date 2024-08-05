import { AppState } from '../app.reducers';
import { createSelector } from '@ngrx/store';

export const selectSummitEventsFeature = (state: AppState) => state.summitEvents;

export const selectAllSummitEvents = createSelector(
  selectSummitEventsFeature,
  summitEvents => summitEvents.summitEvents
);
export const selectFutureSummitEvents = createSelector(selectSummitEventsFeature, summitEvents =>
  summitEvents.summitEvents.filter(event => !event.isFinished)
);

export const selectFinishedSummitEvents = createSelector(selectSummitEventsFeature, summitEvents =>
  summitEvents.summitEvents.filter(event => event.isFinished)
);

export const selectSummitEventsLoading = createSelector(
  selectSummitEventsFeature,
  summitEvents => summitEvents.loading
);

export const selectSummitEventsError = createSelector(selectSummitEventsFeature, summitEvents => summitEvents.error);

export const selectSummitEventById = (id: number | undefined) =>
  createSelector(selectAllSummitEvents, summitEvents => summitEvents.find(event => event.id === id));
