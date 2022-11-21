import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretChatComponent } from './secret-chat.component';

describe('SecretChatComponent', () => {
  let component: SecretChatComponent;
  let fixture: ComponentFixture<SecretChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
