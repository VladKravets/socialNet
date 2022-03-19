import {PostType} from "./state";

export const profileReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_POST':
            const newPost: PostType = {
                id: 5,
                message: action.postMessage,
                likesCount: 3
            }
            state.posts.push(newPost)
            state.newPostText = ''
            break;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            break;
        default:
            return state
    }

    return state

}
export const AddPostAcc = (postMessage: string) => {
    return {
        type: "ADD_POST",
        postMessage: postMessage
    } as const
}
export const ChangeNewTextAcc = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}
