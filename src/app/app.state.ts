import { PostState } from "./models/states/post.state.ts";
import { postsReducer } from "./state/reducers/post.reducer";
import { ActionReducerMap } from "@ngrx/store";

export interface Appstate {
    posts: PostState
}

export const ROOT_REDUCER:ActionReducerMap<Appstate> = {
    posts: postsReducer,
}

