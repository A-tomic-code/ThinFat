import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestroTrabajoComponent } from './nuestro-trabajo.component';

describe('NuestroTrabajoComponent', () => {
  let component: NuestroTrabajoComponent;
  let fixture: ComponentFixture<NuestroTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuestroTrabajoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuestroTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
