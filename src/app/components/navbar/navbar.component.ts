import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }
  name = 'Angular';
  public isCollapsed = true;
  
  navigate(where:string){
    this.router.navigateByUrl(where)
  }

  ngOnInit(): void {
  }


}
