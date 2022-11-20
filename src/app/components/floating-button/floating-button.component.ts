import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ChatMessage } from 'src/app/models/chat-message';
import { ChatService } from 'src/app/shared/chat.service';

@Component({
  selector: 'app-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.scss']
})
export class FloatingButtonComponent implements OnInit {
  expanded = false;

  socket: WebSocket | null = null;
  conversation : ChatMessage[] = [];

  message: string = '';
  socketConfig: any = {};


  constructor(private chatService: ChatService) { }

  toggleDisplay(){
    this.expanded ? this.expanded = false : this.expanded = true;
  }

  sendMessage(msg:string){
    this.chatService.sendMessage(msg)
  }

  onSubmit(){
    this.sendMessage(this.message);
    this.message = '';
  }
  ngOnInit(): void {
    this.socket = this.chatService.getSocket();
    this.conversation = this.chatService.getConversation()
  }

}

