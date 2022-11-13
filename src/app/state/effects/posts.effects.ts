import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { map, mergeMap, catchError, EMPTY } from 'rxjs';
import { BlogService } from 'src/app/shared/blog.service';
import { ACTION_TYPE_GET_POSTS, ACTION_TYPE_UPDATED_POSTS } from '../actions/post.actions';

@Injectable()
export class PostsEffects {
    
    loadPosts$ = createEffect(() => {

        return this.actions$.pipe(
            ofType(ACTION_TYPE_GET_POSTS),

            mergeMap( () => this.blogService.getAll().pipe(
                map( (posts) => ({type: ACTION_TYPE_UPDATED_POSTS, posts: posts}))
            )),

            catchError(() => EMPTY)
        );

    });

    constructor(
        private actions$: Actions,
        private blogService: BlogService){}

}