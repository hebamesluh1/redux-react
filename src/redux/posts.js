import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";
const initialState = [
  {
    id: 1,
    title: "learning redux toolkit",
    content: "i've heard good about this",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: 2,
    title: "Slices...",
    content: "The more I say slice",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

export const PostSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // first method
    // postAdd:(state, action) =>{
    //   state.push(action.payload);
    // },
    // second method
    postAdd: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0
          }
          },
        };
      },
  },
  reactionAdded(state, action) {
    const { postId, reaction } = action.payload
    const existingPost = state.find(post => post.id === postId)
    if (existingPost) {
        existingPost.reactions[reaction]++
    }
}
}
});
export const selectAllPosts = (state) => state.posts;

export const { postAdd ,reactionAdded} = PostSlice.actions;

export default PostSlice.reducer;
