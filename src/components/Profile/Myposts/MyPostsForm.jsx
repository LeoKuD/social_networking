import React from 'react'
import { useForm } from 'react-hook-form'

export const MyPostsForm = (props) => {


    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data);
        props.addPost(data.yourPost)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="yourPost">Ваш пост</label>
            <input {...register('yourPost')}
                name='yourPost'
                type="text"
                placeholder={'your post'} />

            <input type="submit" name="addPost" id="" />
        </form>
    )

}