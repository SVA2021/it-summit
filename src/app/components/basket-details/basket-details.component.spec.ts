import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketDetailsComponent } from './basket-details.component';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';

describe('BasketDetailsComponent', () => {
  let component: BasketDetailsComponent;
  let fixture: ComponentFixture<BasketDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasketDetailsComponent],
      providers: [provideRouter([]), provideStore()],
    }).compileComponents();

    fixture = TestBed.createComponent(BasketDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
