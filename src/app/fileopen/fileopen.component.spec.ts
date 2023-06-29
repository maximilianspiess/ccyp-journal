import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileopenComponent } from './fileopen.component';

describe('FileopenComponent', () => {
  let component: FileopenComponent;
  let fixture: ComponentFixture<FileopenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileopenComponent]
    });
    fixture = TestBed.createComponent(FileopenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
