import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TuiButtonModule, TuiLinkModule } from '@taiga-ui/core';
import { TuiThemeNightService } from '@taiga-ui/addon-doc';
import { AsyncPipe } from '@angular/common';
import {BasketDetailsComponent} from "../basket-details/basket-details.component";

interface NavigationItem {
  name: string;
  url: string;
}

const NAVIGATION: NavigationItem[] = [
  {
    name: 'Main',
    url: '/',
  },
  {
    name: 'Shop',
    url: '/shop',
  },
  {
    name: 'Basket',
    url: '/basket',
  },
  {
    name: 'Contacts',
    url: '/contacts',
  },
];

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, TuiLinkModule, TuiButtonModule, AsyncPipe, BasketDetailsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  navigation = NAVIGATION;
  constructor(@Inject(TuiThemeNightService) readonly night: TuiThemeNightService) {}

  toggleDarkMode() {
    this.night.toggle();
  }
}
