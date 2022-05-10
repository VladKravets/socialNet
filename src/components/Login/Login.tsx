import React from 'react';
import LoginForm from "./LoginForm";

export const Login = () => {
   const onSubmit=(formData:any)=>{
       console.log(formData)
   }
    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    );
};

