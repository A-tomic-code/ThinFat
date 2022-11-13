import { Post } from "../post.interface";

export interface PostState {

    loading: boolean,
    posts: ReadonlyArray<Post>
    
}
