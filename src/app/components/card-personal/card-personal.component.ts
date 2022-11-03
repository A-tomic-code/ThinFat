import { Component, Input, OnInit } from '@angular/core';
import { Professional } from 'src/app/models/professional';

@Component({
  selector: 'app-card-personal',
  templateUrl: './card-personal.component.html',
  styleUrls: ['./card-personal.component.scss']
})
export class CardPersonalComponent implements OnInit {

  @Input() data:Professional = new Professional();

  constructor() { }

  like(){
    this.data.like();
  }

  ngOnInit(): void {
  }

}
