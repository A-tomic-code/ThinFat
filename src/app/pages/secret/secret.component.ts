import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.scss']
})
export class SecretComponent implements OnInit {
  
  constructor() { }
  logged: boolean = true;
  
  secrets = {
    user: 'sara',
    secret: 'secret'
  }

  login(data:any){

    if (JSON.stringify(data) == JSON.stringify(this.secrets)){
      this.logged = true;
      // this.showSecret();
    };
  }
 
  showSecret() {
    throw new Error('Method not implemented.');
  }


  ngOnInit(): void {
  }

}
