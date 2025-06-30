import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyledInput } from './styled-input';

describe('StyledInput', () => {
  let component: StyledInput;
  let fixture: ComponentFixture<StyledInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyledInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyledInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
