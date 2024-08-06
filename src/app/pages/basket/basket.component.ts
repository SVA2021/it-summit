import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { TuiDestroyService } from '@taiga-ui/cdk';
import { Store } from '@ngrx/store';
import { selectBasket, selectBasketTotalPrice } from '@store/basket/basket.selectors';
import { takeUntil } from 'rxjs';
import { SummitEvent, Ticket } from '@core/models/models';
import { getDiscountPrice } from '@core/helpers/helpers';
import { selectFutureSummitEvents } from '@store/summit-events/summit-events.selectors';
import { AsyncPipe, NgIf, UpperCasePipe } from '@angular/common';
import { TuiCurrencyPipeModule, TuiThumbnailCardModule } from '@taiga-ui/addon-commerce';
import { TuiAlertService, TuiButtonModule, TuiFormatNumberPipeModule } from '@taiga-ui/core';
import { RouterLink } from '@angular/router';
import { BasketActions } from '@store/basket/basket.actions';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    TuiCurrencyPipeModule,
    TuiFormatNumberPipeModule,
    RouterLink,
    TuiButtonModule,
    UpperCasePipe,
    TuiThumbnailCardModule,
  ],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TuiDestroyService],
})
export class BasketComponent implements OnInit {
  store = inject(Store);
  destroy$ = inject(TuiDestroyService);
  alerts = inject(TuiAlertService);

  basket$ = this.store.select(selectBasket).pipe(takeUntil(this.destroy$));
  total$ = this.store.select(selectBasketTotalPrice).pipe(takeUntil(this.destroy$));
  summitEvents: SummitEvent[] = [];

  ngOnInit() {
    this.store
      .select(selectFutureSummitEvents)
      .pipe(takeUntil(this.destroy$))
      .subscribe(events => {
        this.summitEvents = events;
      });
  }

  getEventDetailsById(id: number | undefined): string | undefined {
    const summitEvent = this.summitEvents.find(event => event.id === id);
    return summitEvent ? `${summitEvent.name} - ${summitEvent.address}` : undefined;
  }

  getPriceWithDiscount(ticket: Ticket) {
    return getDiscountPrice(ticket);
  }

  clearBasket() {
    this.store.dispatch(BasketActions.clearBasket());
    this.alerts
      .open('Basket was successfully cleared', { label: 'Warning', status: 'warning', autoClose: 1000 })
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }

  buyTickets() {
    this.alerts
      .open('Tickets were successfully purchased', { label: 'Success', status: 'success', autoClose: 3000 })
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }
}
