import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post.interface';
import { BlogService } from 'src/app/shared/blog.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  id: string | null = null
  post: Post = {
    id: 'noid',
    title: '',
    description: '',
    date: '',
    comments: [''],
    likes: 0,
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private firestore: Firestore,
    private blogService: BlogService
  )
  { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.blogService.getOne(this.id ? this.id : 'null').subscribe( (data:any) => {
      this.post = data
      console.log('---',this.post);
    })
  }

}
