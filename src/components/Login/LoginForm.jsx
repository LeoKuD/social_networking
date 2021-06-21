import React from 'react'
import { useForm, Controller } from "react-hook-form";
import { Input } from '../elementsUI/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from '@material-ui/core/styles';




export const LoginForm = (props) => {
    const { control, register, handleSubmit, formState: { errors } } = useForm({
        // defaultValues: {
        //     isRemember: false
        // },
        mode: 'onBlur'
    })
    const onSubmit = (data) => {
        console.log(data);
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <InputLabel htmlFor="email">login</InputLabel>
            <Input placeholder='Введите логин' {...register('login', { validate: (value) => value.length > 5 })} type='text'></Input>
            {errors.login && <p>This is required and is less than 5 characters</p>}


            <InputLabel htmlFor="password">Password</InputLabel>
            <Input placeholder='Введите пароль' {...register('password', { validate: (value) => value.length > 8 })}></Input>
            {errors.password && <p>This is required and is less than 8 characters</p>}

            <FormControlLabel
                control={
                    <Controller
                        name="isRemember"
                        control={control}
                        defaultValue={false}
                        render={({ field }) => <Checkbox {...field} />}
                    />
                }
                label="Remember"
            />
            <input type="submit" />
        </form>
    )
}