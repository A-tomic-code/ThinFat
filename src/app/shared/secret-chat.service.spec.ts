import { TestBed } from '@angular/core/testing';

import { SecretChatService } from './secret-chat.service';

describe('SecretChatService', () => {
  let service: SecretChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecretChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
