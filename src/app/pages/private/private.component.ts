import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { LocalstorageService } from '@core/services/localstorage.service';
import { TuiDestroyService } from '@taiga-ui/cdk';
import {TuiAlertService, TuiButtonModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UuidGeneratorService } from '@core/services/uuid-generator.service';
import { TuiInputModule, TuiInputPhoneModule } from '@taiga-ui/kit';
import { User } from '@core/models/models';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-private',
  standalone: true,
  imports: [ReactiveFormsModule, TuiInputModule, TuiInputPhoneModule, TuiButtonModule, TuiTextfieldControllerModule],
  templateUrl: './private.component.html',
  styleUrl: './private.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TuiDestroyService],
})
export class PrivateComponent implements OnInit {
  auth = inject(AuthService);
  lsService = inject(LocalstorageService);
  uuidGenerator = inject(UuidGeneratorService);
  alerts = inject(TuiAlertService);
  destroy$ = inject(TuiDestroyService);

  isEdit = false;

  readonly authForm = new FormGroup({
    name: new FormControl<string>('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    phone: new FormControl<string>('', [Validators.required]),
  });

  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      this.authForm.patchValue({
        name: this.auth.user?.name,
        email: this.auth.user?.email,
        phone: this.auth.user?.phone,
      });
    }
  }

  setEditMode() {
    this.isEdit = true;
  }

  submitForm() {
    if (this.authForm.invalid) {
      this.alerts.open('Form is invalid', { status: 'error' }).pipe(takeUntil(this.destroy$)).subscribe();
      this.authForm.markAllAsTouched();
      return;
    }
    if (this.authForm.valid) {
      const formValue = this.authForm.value;
      const user: User = {
        name: formValue.name || '',
        email: formValue.email || '',
        phone: formValue.phone || '',
      };
      this.auth.user = user;
      this.auth.setToken(this.uuidGenerator.getUUID());
      this.isEdit = false;
      this.lsService.set('user', user);
      this.lsService.set('token', this.auth.getToken());
      this.alerts.open('User updated', { status: 'success' }).pipe(takeUntil(this.destroy$)).subscribe();
    }
  }
}
