import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChatMessage } from '../models/chat-message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  url:string = 'ws://localhost:8095'
  socket:WebSocket | null = null;
  conversation : ChatMessage[] = [];
  config : any = {};

  constructor(private http: HttpClient) {
  }

  sendMessage(msg:string){
    console.log(`Enviando --> ${msg}`)
    const message = {
      type: 'message',
      content: msg,
      from: this.config.id,
      to: 'thinfat'
    }

    const messageObj = JSON.stringify(message)
    this.socket?.send(messageObj);
  }

  getSocket(){
    return this.socket ? this.socket : this.connect(false);
  }
  
  getConversation(){
    return this.conversation;
  }
  
  closeConecction(){
    this.socket ? this.socket.close() : null;
  }
  
  private connect(admin:boolean): WebSocket{
    const socket = new WebSocket(this.url);
    this.socket = socket;
    this.initSocket(this.socket);
  
    if(this.socket.readyState === 1){
      //dispatch action
    }

    return socket;
  }

  private initSocket(socket:WebSocket){
    socket.onopen = () => {
      console.log('Conectado websockets');
    }

    socket.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      const message: ChatMessage = {
        from: msg.from || 'xx',
        to: msg.to || 'xx',
        content: msg.content
      };
      
      switch(msg.type){
        case 'message':
          this.conversation.push(message);
          console.log('Recibido --> ', message);
          break;
        case 'config':

          for (const key in msg){
            
            if(key != 'type'){
              this.config[key] = msg[key];
            }

          }

          console.log('New config --> ', this.config);
          break;   
      };

      // if(event.data[0] === '{'){
      //   this.socketConfig(event.data);
      // }else{
      //   this.conversation.push(message);
      // }
      
    }
  }
}
