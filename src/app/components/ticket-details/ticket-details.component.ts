import { ChangeDetectionStrategy, Component, inject, Input, OnInit } from '@angular/core';
import { SummitEvent, Ticket } from '@core/models/models';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { TuiBadgeModule, TuiInputNumberModule, tuiInputNumberOptionsProvider, TuiTagModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiFormatNumberPipeModule, TuiSvgModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { AsyncPipe, DatePipe, NgIf, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { TuiCurrencyPipeModule } from '@taiga-ui/addon-commerce';
import { Store } from '@ngrx/store';
import { Observable, of, takeUntil } from 'rxjs';
import { selectSummitEventById } from '@store/summit-events/summit-events.selectors';
import { TuiDestroyService } from '@taiga-ui/cdk';

@Component({
  selector: 'app-ticket-details',
  standalone: true,
  imports: [
    TuiInputNumberModule,
    ReactiveFormsModule,
    TuiButtonModule,
    TuiBadgeModule,
    TuiTagModule,
    NgIf,
    TuiCurrencyPipeModule,
    TuiFormatNumberPipeModule,
    AsyncPipe,
    UpperCasePipe,
    NgOptimizedImage,
    TuiSvgModule,
    TuiTextfieldControllerModule,
    DatePipe,
  ],
  templateUrl: './ticket-details.component.html',
  styleUrl: './ticket-details.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    TuiDestroyService,
    tuiInputNumberOptionsProvider({
      decimal: 'never',
      step: 1,
    }),
  ],
})
export class TicketDetailsComponent implements OnInit {
  @Input() ticket!: Ticket;
  store = inject(Store);
  destroy$ = inject(TuiDestroyService);
  eventDetails$: Observable<SummitEvent | undefined> = of(undefined);

  qty = new FormControl<number>(0, [Validators.min(0)]);

  ngOnInit() {
    this.qty.addValidators(Validators.max(this.ticket.quantity));
    this.qty.updateValueAndValidity();

    this.eventDetails$ = this.store.select(selectSummitEventById(this.ticket.eventId)).pipe(takeUntil(this.destroy$));
  }

  addToBasket() {
    console.log(this.ticket);
  }

  getPriceWithDiscount() {
    if (this.ticket.discount) {
      return this.ticket.price - (this.ticket.price * this.ticket.discount) / 100;
    } else {
      return this.ticket.price;
    }
  }
}
