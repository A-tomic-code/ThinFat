import { Component, OnInit } from '@angular/core';
import { SecretChatService } from 'src/app/shared/secret-chat.service';

@Component({
  selector: 'app-secret-chat',
  templateUrl: './secret-chat.component.html',
  styleUrls: ['./secret-chat.component.scss']
})
export class SecretChatComponent implements OnInit {

  socket = {}
  chats = ['chat1', 'chat2'];
  conversation = [];

  constructor(private chat: SecretChatService) { }

  ngOnInit(): void {
    this.socket = this.chat.getSocket()
    this.chat.chatList$.subscribe( (data) => {
      this.chats = data;
      console.log(data);
    });
    console.log(this.chats);
  }

}
