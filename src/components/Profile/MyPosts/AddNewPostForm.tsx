import React, {ChangeEvent} from "react";

export type AddNewPostFormPropsType = {
    onSubmit: (values: any) => void
}

const AddNewPostForm: React.FC<AddNewPostFormPropsType> = (props) => {
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <form handleSubmit>
            <div>
            <textarea
                onChange={onPostChange}
                value={props.newPostText}/>
            </div>
            <div>

                <button onClick={addPost}>Add post</button>
            </div>
        </form>
    )
}
export default AddNewPostForm