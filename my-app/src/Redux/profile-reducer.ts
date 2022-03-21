import {ActionsType, PostType} from "./state";

type ProfileInitialState = {
    newPostText: string
    posts: Array<PostType>
}


let initialState: ProfileInitialState = {
    posts: [
        {id: 1, message: 'Hello samurai', likesCount: 712},
        {id: 2, message: 'How are you?', likesCount: 491},
        {id: 3, message: "I'm a ninja", likesCount: 31},
    ],
    newPostText: ''
}

export const profileReducer = (state = initialState, action: ActionsType) => {
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
