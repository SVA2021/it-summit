import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { TuiButtonModule, TuiHintModule } from '@taiga-ui/core';
import { TuiBadgedContentModule } from '@taiga-ui/kit';

@Component({
  selector: 'app-basket-details',
  standalone: true,
  imports: [AsyncPipe, TuiButtonModule, TuiBadgedContentModule, TuiHintModule],
  templateUrl: './basket-details.component.html',
  styleUrl: './basket-details.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasketDetailsComponent {}
