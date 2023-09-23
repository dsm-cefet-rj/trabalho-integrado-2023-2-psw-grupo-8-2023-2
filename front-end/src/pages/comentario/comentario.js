import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    comments: [],
    comment: "",
    value: 0,
};

const commentsSlice = createSlice({
    name: "comment",
    initialState,
    reducers: {
        addComment(state, action){
            const newComment = action.payload;
            state.comments.push(newComment);
        },
    }
});


export default commentsSlice.reducer;
export const { addComment , increment, decrement} = commentsSlice.actions;