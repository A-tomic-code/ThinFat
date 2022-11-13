import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss']
})
export class CardPostComponent implements OnInit {

  @Input() post:Post = {
    title: '',
    description: '',
    date: '',
    comments: [''],
    likes: 0,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
