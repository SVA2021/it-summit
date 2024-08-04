import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main',
  },
  {
    path: 'main',
    loadComponent: () => import('./pages/main/main.component').then(m => m.MainComponent),
  },
  {
    path: 'basket',
    loadComponent: () => import('./pages/basket/basket.component').then(m => m.BasketComponent),
  },
  {
    path: 'contacts',
    loadComponent: () => import('./pages/contacts/contacts.component').then(m => m.ContactsComponent),
  },
  {
    path: 'private',
    loadComponent: () => import('./pages/private/private.component').then(m => m.PrivateComponent),
  },
  {
    path: 'shop',
    loadComponent: () => import('./pages/shop/shop.component').then(m => m.ShopComponent),
  },
  {
    path: 'event/:id',
    loadComponent: () => import('./pages/event-details/event-details.component').then(m => m.EventDetailsComponent),
  },
  {
    path: '**',
    redirectTo: 'main',
  },
];
