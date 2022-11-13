import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';


@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss']
})
export class CardPostComponent implements OnInit {

  @Input() post:Post = new Post();

  constructor() { }

  ngOnInit(): void {
  }

}
