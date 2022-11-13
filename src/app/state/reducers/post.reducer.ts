import { createReducer, on } from '@ngrx/store'
import { getPosts, postsUpdated } from "../actions/post.actions";
import { PostState } from "src/app/models/states/post.state.ts";


export const initialState: PostState = {
    loading: false,
    posts: []
} 

export const postsReducer =  createReducer(
    initialState,

    on(getPosts, (state) => {
        return {...state, loading: true}
    }),
    
    on(postsUpdated, (state, props) => {
        return {
            ...state, 
            loading: false,
            posts: props.posts    
        }
    })  
);