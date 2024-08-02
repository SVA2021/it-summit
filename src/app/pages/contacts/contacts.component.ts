import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsComponent {

}
