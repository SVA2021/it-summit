import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { SUMMIT_EVENTS, TICKETS } from '@db/fakeDB';

@Injectable({
  providedIn: 'root',
})
export class ApiFakeCallService {
  getEvents() {
    return of(SUMMIT_EVENTS).pipe(delay(333));
  }

  getTickets() {
    return of(TICKETS).pipe(delay(333));
  }
}
