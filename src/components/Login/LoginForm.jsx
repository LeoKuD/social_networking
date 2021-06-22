import React from 'react'
import { useForm, Controller } from "react-hook-form"
import { Input } from '../elementsUI/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"




export const LoginForm = (props) => {
    const { control, register, handleSubmit, formState: { errors } } = useForm({
        // defaultValues: {
        //     isRemember: false
        // },
        mode: 'onBlur'
    })
    const onSubmit = (data) => {
        console.log(data)
        props.login(data.email, data.password, data.isRemember)
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <InputLabel htmlFor="email">login</InputLabel>
            <Input placeholder='Введите email'
                {...register('email', { validate: (value) => value.length > 5 })}
                type='email'></Input>
            {errors.email && <p>This is required and is less than 5 characters</p>}


            <InputLabel htmlFor="password">Password</InputLabel>
            <Input placeholder='Введите пароль'
                {...register('password', { validate: (value) => value.length > 8 })}
                type='password'></Input>
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