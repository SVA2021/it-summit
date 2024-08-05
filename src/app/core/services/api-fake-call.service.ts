import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { SUMMIT_EVENTS } from '@db/fakeDB';

@Injectable({
  providedIn: 'root',
})
export class ApiFakeCallService {
  getEvents() {
    return of(SUMMIT_EVENTS).pipe(delay(333));
  }
}
