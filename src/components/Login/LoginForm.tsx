import React from 'react';
import {Formik, Field, Form} from 'formik';

export type ValuesType = {
    firstName: string;
    lastName: string;
    email: string;
}


export const LoginForm: React.FC<any> = (props) => {

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
            }}
            onSubmit={async (values: ValuesType) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
            }}
        >
            <Form onSubmit={props.handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <Field id="firstName" name="firstName" placeholder="Your name"/>

                <label htmlFor="lastName">Last Name</label>
                <Field id="lastName" name="lastName" placeholder="Your Lastname"/>

                <label htmlFor="email">Email</label>
                <Field
                    id="email"
                    name="email"
                    placeholder="example@example.com"
                    type="email"
                />
                <button type="submit">
                    Submit
                </button>
            </Form>
        </Formik>
    );
};

export default LoginForm;
