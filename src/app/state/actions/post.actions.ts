import {createAction, props} from '@ngrx/store'
import { Post } from 'src/app/models/post.interface';

export const ACTION_TYPE_GET_POSTS = '[Blog] Get posts';
export const getPosts = createAction(
    ACTION_TYPE_GET_POSTS
);

export const ACTION_TYPE_UPDATED_POSTS = '[Blog] Updated posts';
export const postsUpdated = createAction(
    ACTION_TYPE_UPDATED_POSTS,
    props<{ posts : Post[] }>()
);

