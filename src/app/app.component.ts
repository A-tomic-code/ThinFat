import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { ChatService } from './shared/chat.service';
import { VirtualTimeScheduler } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'thinfat';

  constructor(private chatService : ChatService) {
    
  }

  ngOnInit(){
    AOS.init();

  }
}
