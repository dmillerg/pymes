import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PymesCardComponent } from './pymes-card.component';

describe('PymesCardComponent', () => {
  let component: PymesCardComponent;
  let fixture: ComponentFixture<PymesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PymesCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PymesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
