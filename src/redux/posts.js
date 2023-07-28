import { createSlice } from "@reduxjs/toolkit";
const initialState=[
    {id:1,title:"learning redux toolkit",content:"i've heard good about this"},
    {id:2,title:"Slices...",content:"The more I say slice"}
]

export const PostSlice =createSlice({
    name: "posts",
    initialState,
    reducers: {
        
    }
});

export default PostSlice.reducer;