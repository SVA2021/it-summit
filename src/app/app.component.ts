import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TuiModeModule,
  TuiThemeNightModule,
  TuiBrightness,
} from '@taiga-ui/core';
import { ChangeDetectionStrategy, Component, inject, Inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@components/header/header.component';
import { TuiThemeNightService } from '@taiga-ui/addon-doc';
import { AsyncPipe, NgIf } from '@angular/common';
import { AuthService } from '@core/services/auth.service';
import { LocalstorageService } from '@core/services/localstorage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    HeaderComponent,
    TuiThemeNightModule,
    TuiModeModule,
    AsyncPipe,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'it-summit';
  auth = inject(AuthService);
  lsService = inject(LocalstorageService);

  constructor(@Inject(TuiThemeNightService) readonly night$: TuiThemeNightService) {}

  get mode(): TuiBrightness | null {
    return this.night$.value ? 'onDark' : null;
  }

  ngOnInit() {
    if (!this.auth.isAuthenticated()) {
      if (this.lsService.exists('token')) {
        this.auth.setToken(this.lsService.get('token'));
      }
      if (this.lsService.exists('user')) {
        this.auth.user = this.lsService.get('user');
      }
    }
  }
}
