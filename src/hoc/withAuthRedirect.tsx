import React, {Component, ComponentType} from "react";
import {Navigate} from "react-router-dom";
import {AppStateType} from "../Redux/redux-store";
import {connect} from "react-redux";

export type MapStatePropsType = {
    isAuth: boolean
}

export const mapStateToPropsForRedirect = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    function RedirectComponent(props: MapStatePropsType) {
        let {isAuth,...restProps}=props

        if (!isAuth) return <Navigate to={'/login'}/>

        return <Component{...restProps as T}/>;
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}