import React from 'react'
import { useForm } from 'react-hook-form'
import { Input } from '../../elementsUI/TextField'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputLabel from '@material-ui/core/InputLabel';


const schema = yup.object().shape({
    yourPost: yup
        .string().max(30, 'Вводите не больше 30 символов')
        .required('Введите сообщение')

})



export const MyPostsForm = (props) => {


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = (data) => {
        console.log(data);
        props.addPost(data.yourPost)


    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputLabel htmlFor="yourPost">Ваш пост</InputLabel>
            <Input {...register('yourPost')}
                name='yourPost'
                id='yourPost'
                type="text"
                placeholder={'Введите текст вашего поста'}
                error={!!errors.yourPost}
                helperText={errors?.yourPost?.message}
            />

            <input type="submit" name="addPost" id="" />
        </form>
    )

}