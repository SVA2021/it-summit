import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  get(key: string) {
    return localStorage.getItem(key);
  }

  set(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }

  exists(key: string) {
    return (
      localStorage.getItem(key) !== null && localStorage.getItem(key) !== undefined && localStorage.getItem(key) !== ''
    );
  }
}
