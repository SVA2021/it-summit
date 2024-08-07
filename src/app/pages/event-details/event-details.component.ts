import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SummitEvent } from '@core/models/models';
import { selectSummitEventById } from '@store/summit-events/summit-events.selectors';
import { TuiButtonModule, TuiLoaderModule } from '@taiga-ui/core';
import { AsyncPipe, NgIf, NgOptimizedImage, NgStyle } from '@angular/common';
import { MapComponent } from '@components/map/map.component';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [TuiLoaderModule, NgIf, AsyncPipe, RouterLink, TuiButtonModule, NgStyle, MapComponent, NgOptimizedImage],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventDetailsComponent implements OnInit {
  route = inject(ActivatedRoute);
  store = inject(Store);

  eventID = this.route.snapshot.paramMap.get('id');
  event$: Observable<SummitEvent | undefined> | null = null;

  ngOnInit(): void {
    if (this.eventID) {
      this.event$ = this.store.select(selectSummitEventById(+this.eventID));
    }
  }
}
