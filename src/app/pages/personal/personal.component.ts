import { Component, OnInit } from '@angular/core';
import { Professional } from 'src/app/models/professional';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  
  sara:Professional = new Professional('Sara', 'Simple plant illustration. From a collection of wildflower illustrations done by Karl Urban at Umatilla')
  onzo:Professional = new Professional('Onzo', 'Simple plant illustration. From a collection of wildflower illustrations done by Karl Urban at Umatilla')
  mao:Professional = new Professional('Mao', 'Simple plant illustration. From a collection of wildflower illustrations done by Karl Urban at Umatilla')
  alex:Professional = new Professional('Alex', 'Simple plant illustration. From a collection of wildflower illustrations done by Karl Urban at Umatilla')
  dani:Professional = new Professional('Dani', 'Simple plant illustration. From a collection of wildflower illustrations done by Karl Urban at Umatilla')
  mon:Professional = new Professional('Mon', 'Simple plant illustration. From a collection of wildflower illustrations done by Karl Urban at Umatilla')


  professionals:Professional[] = [
  ];

  constructor() { 
    this.professionals.push(this.sara);
    this.professionals.push(this.onzo);
    this.professionals.push(this.mao);
    this.professionals.push(this.alex);
    this.professionals.push(this.dani);
    // this.professionals.push(this.mon);
  }

  ngOnInit(): void {
  }

}
