import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretPanelComponent } from './secret-panel.component';

describe('SecretPanelComponent', () => {
  let component: SecretPanelComponent;
  let fixture: ComponentFixture<SecretPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
