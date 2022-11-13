import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { BlogService } from 'src/app/shared/blog.service';
import { Store } from '@ngrx/store';
import { getPosts, postsUpdated } from 'src/app/state/actions/post.actions';
import { observable, Observable } from 'rxjs';
import { selectAllPosts, selectPostsLoading } from 'src/app/state/selectors/post.selectors';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  loading$: Observable<boolean> = new Observable();
  posts$: Observable<ReadonlyArray<Post>> = new Observable(); 
  
  constructor(private blog: BlogService, private store: Store<any>) { }
  

  ngOnInit(): void {
    this.loading$ = this.store.select(selectPostsLoading);
    
    this.store.dispatch(getPosts())
    this.posts$ = this.store.select(selectAllPosts);


    // this.blog.getAll().subscribe( (posts) => {
    //   this.posts = posts
    //   console.log(posts)
      
    //   this.store.dispatch(postsUpdated( {posts: posts} ))
    // })
  }

}
