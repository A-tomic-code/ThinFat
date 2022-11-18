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

  socketConfig: any = {};


  constructor(private chatService: ChatService, private renderer: Renderer2) { }

  toggleDisplay(){
    this.expanded ? this.expanded = false : this.expanded = true;
  }

  initSocket(socket:WebSocket){
    socket.onopen = () => {
      // alert('Conectado websockets')
    }

    socket.onmessage = (event) => {
      const message: ChatMessage = {from: 'xx', to: 'xx', content: event.data};
      
      if(event.data[0] === '{'){
        this.socketConfig(event.data);
      }else{
        this.conversation.push(message);
      }
      
    }
  }
  
  setSocketConfig(data: string) {
    console.log(`Configuring server --> ${data}`)

    const config = JSON.parse(data);
    this.socketConfig = {...this.setSocketConfig, config}
  }

  ngOnInit(): void {
    this.chatService.getSocket()
    ? this.socket = this.chatService.getSocket()
    : this.socket = this.chatService.connect(false);

    this.socket ? this.initSocket(this.socket) : null;
  }

}

