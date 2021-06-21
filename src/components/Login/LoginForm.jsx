import React from 'react'
import { useForm } from "react-hook-form";


export const LoginForm = (props) => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="email">Email</label>
                <input placeholder='Email' {...register('email')} type='email'></input>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input placeholder='Password' {...register('password')}></input>
            </div>
            <div>
                <label htmlFor='isRemember'>Remember password</label>
                <input type='checkbox' {...register('isRemember')} ></input>
            </div>
            <input type="submit" />
        </form>
    )
}