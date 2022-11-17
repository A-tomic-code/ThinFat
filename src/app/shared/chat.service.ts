import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  url:string = 'ws://localhost:8085'
  socket:WebSocket | null = null;

  constructor(private http: HttpClient) {
    this.connect()
  }


  getSocket(){
    return this.socket;
  }
  
  closeConecction(){
    this.socket ? this.socket.close() : null;
  }
  
  connect(): WebSocket{
    this.socket = new WebSocket(this.url);
  
    if(this.socket.readyState === 1){
      //dispatch action
    }

    return this.socket;
  }
}
