import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplikationComponent } from './applikation.component';

describe('ApplikationComponent', () => {
  let component: ApplikationComponent;
  let fixture: ComponentFixture<ApplikationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplikationComponent]
    });
    fixture = TestBed.createComponent(ApplikationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
