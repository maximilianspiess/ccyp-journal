import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilenavComponent } from './filenav.component';

describe('FilenavComponent', () => {
  let component: FilenavComponent;
  let fixture: ComponentFixture<FilenavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilenavComponent]
    });
    fixture = TestBed.createComponent(FilenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
