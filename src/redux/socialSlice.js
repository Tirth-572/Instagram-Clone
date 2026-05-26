import { createSlice } from '@reduxjs/toolkit';

const socialSlice = createSlice({
    name: 'social',
    initialState: {
        followedUsers: [],   // array of user ids/labels that are followed
        likedPosts: [],      // array of post ids that are liked
    },
    reducers: {
        toggleFollow: (state, action) => {
            const userId = action.payload;
            if (state.followedUsers.includes(userId)) {
                state.followedUsers = state.followedUsers.filter(id => id !== userId);
            } else {
                state.followedUsers.push(userId);
            }
        },
        toggleLike: (state, action) => {
            const postId = action.payload;
            if (state.likedPosts.includes(postId)) {
                state.likedPosts = state.likedPosts.filter(id => id !== postId);
            } else {
                state.likedPosts.push(postId);
            }
        }
    }
});

export const { toggleFollow, toggleLike } = socialSlice.actions;
export default socialSlice.reducer;
