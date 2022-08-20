import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenceMakerDashboardComponent } from './sentence-maker-dashboard.component';

describe('SentenceMakerDashboardComponent', () => {
  let component: SentenceMakerDashboardComponent;
  let fixture: ComponentFixture<SentenceMakerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentenceMakerDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SentenceMakerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
