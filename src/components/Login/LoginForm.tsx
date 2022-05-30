import React from 'react';
import {Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import a from '../../common/Button.module.css'
import s from "./Login.module.css"

type LoginPropsType = {
    callback: (email: string, pass: string, remember: boolean, setSubmitting: (isSubmition: boolean) => void, setStatus: (status: string) => void) => void
}

const LoginValidationSchema = Yup.object().shape({
    login: Yup.string()
        .email('Неверный email')
        .required('Обязательно'),
    password: Yup.string()
        .min(5, 'Минимум 5 символов!')
        .required('Обязательно')
});

export const LoginForm = (props: LoginPropsType) => {
    return (
        <Formik
            initialValues={{
                login: '',
                password: '',
                remember: false,
            }}
            onSubmit={(values, actions) => {
                actions.setStatus(null)
                props.callback(values.login, values.password, values.remember, actions.setSubmitting, actions.setStatus)
                actions.resetForm({})
                actions.setSubmitting(true)
                console.log('values ', values)
            }}

            validationSchema={LoginValidationSchema}
        >
            {
                ({status, isSubmitting, touched, errors}) => (

                    <Form>
                        <div>
                            <label className={s.input} htmlFor="login">Login</label>
                            <Field name="login" id={"login"}/>
                            {errors.login && touched.login && <div>{errors.login}</div>}
                        </div>
                        <div style={{marginBottom: '8px'}}>
                            <label className={s.input} htmlFor="password">Pass</label>
                            <Field type="password" name="password"/>
                            {errors.password && touched.password && <div>{errors.password}</div>}
                        </div>
                        <div>
                            <label htmlFor="remember">Remember Me</label>
                            <Field type="checkbox" name="remember"/>
                        </div>
                        {status && <div>{status}</div>}
                        <div>
                            <button className={a.button} type="submit" name="submit" disabled={isSubmitting}>Login</button>
                        </div>
                    </Form>
                )
            }
        </Formik>
    )
}

export default LoginForm;