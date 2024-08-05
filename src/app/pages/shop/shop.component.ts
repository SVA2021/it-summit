import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { TuiDestroyService } from '@taiga-ui/cdk';
import { Store } from '@ngrx/store';
import { TicketsActions } from '@store/tickets/tickets.actions';
import { Observable, takeUntil } from 'rxjs';
import { Ticket } from '@core/models/models';
import { selectTickets, selectTicketsError, selectTicketsLoading } from '@store/tickets/tickets.selectors';
import { AsyncPipe, NgIf, NgTemplateOutlet } from '@angular/common';
import { TuiLoaderModule } from '@taiga-ui/core';
import { TicketDetailsComponent } from '@components/ticket-details/ticket-details.component';
import { SummitEventsActions } from '@store/summit-events/summit-events.actions';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [AsyncPipe, TuiLoaderModule, NgIf, NgTemplateOutlet, TicketDetailsComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TuiDestroyService],
})
export class ShopComponent implements OnInit {
  store = inject(Store);
  destroy$ = inject(TuiDestroyService);

  tickets$: Observable<Ticket[]> = this.store.select(selectTickets).pipe(takeUntil(this.destroy$));
  isLoading$: Observable<boolean> = this.store.select(selectTicketsLoading).pipe(takeUntil(this.destroy$));
  error$: Observable<string> = this.store.select(selectTicketsError).pipe(takeUntil(this.destroy$));

  ngOnInit() {
    this.store.dispatch(TicketsActions.loadingTickets());
    this.store.dispatch(SummitEventsActions.loadingSummitEvents());
  }
}
