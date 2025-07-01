import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionAssigned } from './action-assigned';

describe('ActionAssigned', () => {
  let component: ActionAssigned;
  let fixture: ComponentFixture<ActionAssigned>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionAssigned]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionAssigned);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
