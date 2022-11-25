import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretPersonalComponent } from './secret-personal.component';

describe('SecretPersonalComponent', () => {
  let component: SecretPersonalComponent;
  let fixture: ComponentFixture<SecretPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretPersonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
