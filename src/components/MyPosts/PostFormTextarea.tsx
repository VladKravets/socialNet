import React from 'react';
import {useFormik} from 'formik';
import cn from './Post/Post.module.scss';
type PostFormTextareaPropsType = {
    addPost: (text: string) => void
}

export const PostFormTextarea: React.FC<PostFormTextareaPropsType> = (props) => {
    const formik = useFormik({
        initialValues: {
            post: ''
        },
        onSubmit: (values, {resetForm, setErrors}) => {
            props.addPost(values.post)
            // formik.resetForm({}) без принятия resetForm параметром после value
            // resetForm({})
            resetForm({values: {post: ''}})
            // setErrors("values")
        }
    })

    return (
        <form onSubmit={formik.handleSubmit} className={cn.addPostBlock}>
            <label htmlFor={'post'} >
                <textarea className={cn.textarea}
                    name={'post'} id={'post'} placeholder={'write your post ✎'}
                    onChange={formik.handleChange} value={formik.values.post}
                />
            </label>
            <button className={cn.button}>+ Add post</button>
        </form>
    )
}
