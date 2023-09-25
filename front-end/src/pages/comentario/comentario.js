import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    comments: [],
    ids: []
};

const commentsSlice = createSlice({
    name: "comment",
    initialState,
    reducers: {
        addComment(state, action) {
            const { productId, comment } = action.payload;
            if (!state.comments[productId]) {
                state.comments[productId] = [];
            }
            state.comments[productId].push(comment);
        },
        removeComment: (state, action) => {
            const { productId, index } = action.payload;
            state.comments[productId].splice(index, 1);
        },
        // editComment: (state, action) => {
        //     const { productId, index, editedComment } = action.payload;
        //     console.log([action.payload])
        //     state.comments[productId][index] = editedComment;
        // },
    }
});


export default commentsSlice.reducer;
export const { addComment, removeComment,/* editComment */} = commentsSlice.actions;