import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretTrabajoComponent } from './secret-trabajo.component';

describe('SecretTrabajoComponent', () => {
  let component: SecretTrabajoComponent;
  let fixture: ComponentFixture<SecretTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretTrabajoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
