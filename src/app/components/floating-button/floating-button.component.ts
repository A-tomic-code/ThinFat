import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.scss']
})
export class FloatingButtonComponent implements OnInit {

  expanded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.expanded ? this.expanded = false : this.expanded = true;
  }

}
