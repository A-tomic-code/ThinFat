import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-secret-form',
  templateUrl: './secret-form.component.html',
  styleUrls: ['./secret-form.component.scss']
})
export class SecretFormComponent implements OnInit {

  @Output() onLogin = new EventEmitter<any>;

  user = {
    user: '',
    secret: ''
  };

  constructor() { }

  onSubmit(){

    this.onLogin.emit(this.user)

    
  }
  // login():boolean{
  //   return JSON.stringify(this.user) == JSON.stringify(this.secrets);
  // }

  ngOnInit(): void {
  }

}
