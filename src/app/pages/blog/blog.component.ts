import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { BlogService } from 'src/app/shared/blog.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  
  constructor(private blog: BlogService) { }
  
  posts: Post[]= [];

  ngOnInit(): void {
    this.blog.getAll().subscribe( (posts) => {
      this.posts = posts
      console.log(posts)
    })
  }

}
