import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TuiModeModule,
  TuiThemeNightModule,
  TuiBrightness,
} from '@taiga-ui/core';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TuiThemeNightService } from '@taiga-ui/addon-doc';
import { AsyncPipe, NgIf } from '@angular/common';

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
export class AppComponent {
  title = 'it-summit';

  constructor(@Inject(TuiThemeNightService) readonly night$: TuiThemeNightService) {}

  get mode(): TuiBrightness | null {
    return this.night$.value ? 'onDark' : null;
  }
}
