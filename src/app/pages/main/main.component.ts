import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TuiCarouselModule, TuiIslandModule, TuiPaginationModule } from '@taiga-ui/kit';
import { RouterLink } from '@angular/router';
import { TuiButtonModule, TuiLinkModule, TuiLoaderModule } from '@taiga-ui/core';
import { AsyncPipe, NgIf, NgOptimizedImage, NgStyle, NgTemplateOutlet } from '@angular/common';
import { SummitEvent } from '@core/models/models';
import { Store } from '@ngrx/store';
import {
  selectFinishedSummitEvents,
  selectFutureSummitEvents,
  selectSummitEventsError,
  selectSummitEventsLoading,
} from '@store/summit-events/summit-events.selectors';
import { Observable, takeUntil } from 'rxjs';
import { TuiDestroyService } from '@taiga-ui/cdk';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    TuiCarouselModule,
    TuiIslandModule,
    RouterLink,
    TuiLinkModule,
    TuiPaginationModule,
    NgOptimizedImage,
    NgTemplateOutlet,
    TuiButtonModule,
    NgStyle,
    TuiLoaderModule,
    AsyncPipe,
    NgIf,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TuiDestroyService],
})
export class MainComponent {
  store = inject(Store);
  destroy$ = inject(TuiDestroyService);
  futureEvents$: Observable<SummitEvent[]> = this.store.select(selectFutureSummitEvents).pipe(takeUntil(this.destroy$));
  finishedEvents$: Observable<SummitEvent[]> = this.store
    .select(selectFinishedSummitEvents)
    .pipe(takeUntil(this.destroy$));
  isLoading$: Observable<boolean> = this.store.select(selectSummitEventsLoading).pipe(takeUntil(this.destroy$));
  error$: Observable<string> = this.store.select(selectSummitEventsError).pipe(takeUntil(this.destroy$));

  futureEventIndex = 0;
  finishedEventIndex = 0;
}
