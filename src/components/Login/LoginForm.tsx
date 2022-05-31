import {Field, Form, Formik, FormikHelpers} from "formik";
import {loginTC} from "../../Redux/auth-reducer";
import {useDispatch} from "react-redux";
import s from "./Login.module.css"
type LoginFormType = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginForm = () => {

    const validateLoginForm = (values: LoginFormType) => {
        const errors = {} as LoginFormType;
        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        if (!values.password) {
            errors.password = 'password is required';
        } else if (!/^(?=.*\d)(?=.*[a-z]).{8,}$/i.test(values.password)) {
            errors.password = 'must contain 8 characters and one digit or letter';
        }
        return errors;
    }

    const dispatch = useDispatch();

    const submit = (values: LoginFormType, actions: FormikHelpers<any>) => {
        if (values.email && values.password) {
            dispatch(loginTC(values.email, values.password, values.rememberMe, actions.setStatus));
        }
        actions.setSubmitting(false)
    }
    return <Formik
        initialValues={{email: '', password: '', rememberMe: false}}
        validate={validateLoginForm}
        onSubmit={(values, actions) => submit(values, actions)}>
        {({isSubmitting, errors, status, touched}) => (
            <Form>
                <div>
                    <Field className={s.superInput} placeholder="login" type="text" name="email"/>
                    {touched.email && errors.email ? <div className={s.errorMessage}>{errors.email}</div> : null}
                </div>
                <div>
                    <Field className={s.superInput} placeholder="password" type="password" name="password"/>
                    {touched.password && errors.password ? <div className={s.errorMessage}>{errors.password}</div> : null}
                </div>
                {status && <div className={s.errorMessage}>{status}</div>}
                <div>
                    <Field type="checkbox" name="rememberMe"/>
                    Remember me
                </div>
                <button type="submit" disabled={isSubmitting}>
                    Login
                </button>
            </Form>
        )}
    </Formik>
}