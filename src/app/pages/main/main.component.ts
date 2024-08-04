import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiCarouselModule, TuiIslandModule, TuiPaginationModule } from '@taiga-ui/kit';
import { RouterLink } from '@angular/router';
import { TuiButtonModule, TuiLinkModule } from '@taiga-ui/core';
import { NgOptimizedImage, NgStyle, NgTemplateOutlet } from '@angular/common';

interface SummitEvent {
  id: number;
  name: string;
  startDate: string;
  stopDate: string;
  description: string;
  imageUrl: string;
  isFinished: boolean;
  address: string;
  coordinates: [number, number] | null;
}

const FINISHED_EVENTS: SummitEvent[] = [
  {
    id: 1,
    name: 'Summit 1',
    startDate: '2023-01-01',
    stopDate: '2023-02-01',
    description: 'Summit 1 description',
    imageUrl: 'https://dummyjson.com/image/700x200/008080/ffffff?text=Hello+IT+Summit',
    isFinished: true,
    address: 'Address 1',
    coordinates: [0, 0],
  },
  {
    id: 2,
    name: 'Summit 2',
    startDate: '2023-05-01',
    stopDate: '2023-06-01',
    description: 'Summit 2 description',
    imageUrl: 'https://dummyjson.com/image/700x200/008080/ffffff?text=Hello+IT+Summit',
    isFinished: true,
    address: 'Address 2',
    coordinates: [0, 0],
  },
  {
    id: 3,
    name: 'Summit 3',
    startDate: '2023-07-01',
    stopDate: '2023-08-01',
    description: 'Summit 3 description',
    imageUrl: 'https://dummyjson.com/image/700x200/008080/ffffff?text=Hello+IT+Summit',
    isFinished: true,
    address: 'Address 3',
    coordinates: [0, 0],
  },
];

const FUTURE_EVENTS: SummitEvent[] = [
  {
    id: 4,
    name: 'Summit 4',
    startDate: '2023-09-01',
    stopDate: '2023-10-01',
    description: 'Summit 4 description',
    imageUrl: 'https://dummyjson.com/image/700x200/008080/ffffff?text=Hello+IT+Summit',
    isFinished: false,
    address: 'Address 4',
    coordinates: [0, 0],
  },
  {
    id: 5,
    name: 'Summit 5',
    startDate: '2023-11-01',
    stopDate: '2023-12-01',
    description: 'Summit 5 description',
    imageUrl: 'https://dummyjson.com/image/700x200/008080/ffffff?text=Hello+IT+Summit',
    isFinished: false,
    address: 'Address 5',
    coordinates: [0, 0],
  },
  {
    id: 6,
    name: 'Summit 6',
    startDate: '2024-01-01',
    stopDate: '2024-02-01',
    description: 'Summit 6 description',
    imageUrl: 'https://dummyjson.com/image/700x200/008080/ffffff?text=Hello+IT+Summit',
    isFinished: false,
    address: 'Address 6',
    coordinates: [0, 0],
  },
];

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
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  futureEvents: SummitEvent[] = FUTURE_EVENTS;
  finishedEvents: SummitEvent[] = FINISHED_EVENTS;

  futureEventIndex = 0;
  finishedEventIndex = 0;
}
