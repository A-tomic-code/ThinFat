import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secret-blog',
  templateUrl: './secret-blog.component.html',
  styleUrls: ['./secret-blog.component.scss']
})
export class SecretBlogComponent implements OnInit {

  selectedOption: string = '';

  constructor() { }

  selectOption(opt: string){
    this.selectedOption = opt
  }

  ngOnInit(): void {
  }

}
