import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TuiLinkModule } from '@taiga-ui/core';

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
  imports: [RouterLink, TuiLinkModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  navigation = NAVIGATION;
}
