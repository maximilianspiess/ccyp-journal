import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedQuestionComponent } from './generated-question.component';

describe('GeneratedQuestionComponent', () => {
  let component: GeneratedQuestionComponent;
  let fixture: ComponentFixture<GeneratedQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneratedQuestionComponent]
    });
    fixture = TestBed.createComponent(GeneratedQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
