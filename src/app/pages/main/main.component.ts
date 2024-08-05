import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { TuiCarouselModule, TuiIslandModule, TuiPaginationModule } from '@taiga-ui/kit';
import { RouterLink } from '@angular/router';
import { TuiButtonModule, TuiLinkModule, TuiLoaderModule } from '@taiga-ui/core';
import { NgOptimizedImage, NgStyle, NgTemplateOutlet } from '@angular/common';
import { SummitEvent } from '@core/models/models';
import { ApiFakeCallService } from '@core/services/api-fake-call.service';

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
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  futureEvents: SummitEvent[] = [];
  finishedEvents: SummitEvent[] = [];

  futureEventIndex = 0;
  finishedEventIndex = 0;

  isLoading = signal(true);

  apiCallService = inject(ApiFakeCallService);

  ngOnInit() {
    this.apiCallService.getEvents().subscribe(
      events => {
        this.isLoading.set(false);
        this.futureEvents = events.filter(event => !event.isFinished);
        this.finishedEvents = events.filter(event => event.isFinished);
      },
      () => {
        this.isLoading.set(false);
      }
    );
  }
}
