import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventDetailsComponent {

}
