import React from 'react'
import { useForm } from 'react-hook-form';

export const DialogsForm = (props) => {

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data);
        props.addMessage(data.yourMessage)
    }

    return (

        <form onSubmit={handleSubmit(onSubmit)} >
            <label htmlFor="yourMessage">Ваше сообщение</label>
            <input {...register('yourMessage')}
                name='yourMessage'
                type="text"
                placeholder={'Введите ваше сообщение'} />

            <input type="submit" name="addMessage" id="" />
        </form >
    )
}
