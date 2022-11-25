import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secret-panel',
  templateUrl: './secret-panel.component.html',
  styleUrls: ['./secret-panel.component.scss']
})
export class SecretPanelComponent implements OnInit {

  selectedOption: string = '';

  constructor() { }

  selectOption(opt:string){
    this.selectedOption = opt;
  }

  ngOnInit(): void {
  }

}
