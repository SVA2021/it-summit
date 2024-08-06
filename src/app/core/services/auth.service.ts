import { Injectable } from '@angular/core';
import { User } from '@core/models/models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string | null = null;

  user: User | null = null;

  getToken(): string | null {
    return this.token;
  }

  setToken(token: string | null) {
    this.token = token;
  }

  clearToken() {
    this.token = null;
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }
}
