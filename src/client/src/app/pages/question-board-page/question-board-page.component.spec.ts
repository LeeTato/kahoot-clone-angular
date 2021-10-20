import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionBoardPageComponent } from './question-board-page.component';

describe('QuestionBoardPageComponent', () => {
  let component: QuestionBoardPageComponent;
  let fixture: ComponentFixture<QuestionBoardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionBoardPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionBoardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
