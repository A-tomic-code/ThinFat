import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPersonalComponent } from './card-personal.component';

describe('CardPersonalComponent', () => {
  let component: CardPersonalComponent;
  let fixture: ComponentFixture<CardPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPersonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
