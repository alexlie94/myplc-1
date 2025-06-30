import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyledButton } from './styled-button';

describe('StyledButton', () => {
  let component: StyledButton;
  let fixture: ComponentFixture<StyledButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyledButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyledButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
