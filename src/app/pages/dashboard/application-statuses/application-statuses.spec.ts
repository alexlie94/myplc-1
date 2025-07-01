import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationStatuses } from './application-statuses';

describe('ApplicationStatuses', () => {
  let component: ApplicationStatuses;
  let fixture: ComponentFixture<ApplicationStatuses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationStatuses]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationStatuses);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
