import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = [
  {
    id: 1,
    title: "learning redux toolkit",
    content: "i've heard good about this",
  },
  { id: 2, title: "Slices...", content: "The more I say slice" },
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
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
  },
});
export const selectAllPosts = (state) => state.posts;

export const { postAdd } = PostSlice.actions;

export default PostSlice.reducer;
