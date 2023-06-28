import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilegroupComponent } from './filegroup.component';

describe('FilegroupComponent', () => {
  let component: FilegroupComponent;
  let fixture: ComponentFixture<FilegroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilegroupComponent]
    });
    fixture = TestBed.createComponent(FilegroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
