import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { TuiButtonModule, TuiFormatNumberPipeModule, TuiHintModule } from '@taiga-ui/core';
import { TuiBadgedContentModule } from '@taiga-ui/kit';
import { TuiDestroyService } from '@taiga-ui/cdk';
import { Store } from '@ngrx/store';
import { selectBasket, selectBasketItemsQty } from '@store/basket/basket.selectors';
import { takeUntil } from 'rxjs';
import { TuiCurrencyPipeModule } from '@taiga-ui/addon-commerce';
import { getDiscountPrice } from '@core/helpers/helpers';
import { Ticket } from '@core/models/models';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-basket-details',
  standalone: true,
  imports: [
    AsyncPipe,
    TuiButtonModule,
    TuiBadgedContentModule,
    TuiHintModule,
    NgIf,
    TuiFormatNumberPipeModule,
    TuiCurrencyPipeModule,
    RouterLink,
  ],
  templateUrl: './basket-details.component.html',
  styleUrl: './basket-details.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TuiDestroyService],
})
export class BasketDetailsComponent {
  store = inject(Store);
  destroy$ = inject(TuiDestroyService);

  basket$ = this.store.select(selectBasket).pipe(takeUntil(this.destroy$));
  totalItems$ = this.store.select(selectBasketItemsQty).pipe(takeUntil(this.destroy$));

  getPriceWithDiscount(ticket: Ticket) {
    return getDiscountPrice(ticket);
  }
}
