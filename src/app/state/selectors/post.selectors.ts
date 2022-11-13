import { PostState } from "src/app/models/states/post.state.ts"
import { createSelector } from "@ngrx/store"
import { Appstate } from "src/app/app.state"

export const selectPostsFeature = (state:Appstate) => state.posts 

export const selectAllPosts = createSelector(
    selectPostsFeature,
    (state: PostState) => state.posts
);

export const selectPostsLoading = createSelector(
    selectPostsFeature,
    (state: PostState) => state.loading
)