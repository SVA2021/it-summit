import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Contact } from '@core/models/models';
import { CONTACTS } from '@db/fakeDB';
import { TuiIslandModule } from '@taiga-ui/kit';
import { TuiLinkModule } from '@taiga-ui/core';
import { MapComponent } from '@components/map/map.component';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [TuiIslandModule, TuiLinkModule, MapComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsComponent {
  contacts: Contact[] = CONTACTS.slice();
}
