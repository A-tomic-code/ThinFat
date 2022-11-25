import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarEntradaComponent } from './eliminar-entrada.component';

describe('EliminarEntradaComponent', () => {
  let component: EliminarEntradaComponent;
  let fixture: ComponentFixture<EliminarEntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarEntradaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
