import React from 'react';
import {
    connect,
    ConnectedComponent,
    ConnectProps,
    DispatchProp,
    DistributiveOmit,
    GetLibraryManagedProps,
    Shared
} from 'react-redux';
import {Navigate} from 'react-router-dom';
import {AppStateType} from '../redux/reducers';
import {AnyAction} from "redux";

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({isAuth: state.auth.isAuth})

export const withAuthRedirect = <P extends object>(Component: React.ComponentType<P>): ConnectedComponent<React.FunctionComponent<MapStatePropsType>,
    DistributiveOmit<GetLibraryManagedProps<React.FunctionComponent<MapStatePropsType>>,
        keyof Shared<MapStatePropsType & DispatchProp<AnyAction>,
            GetLibraryManagedProps<React.FunctionComponent<MapStatePropsType>>>>
    & ConnectProps> => {

    const WithRedirect: React.FC<MapStatePropsType> = ({isAuth, ...props}) => {

        if (!isAuth) return <Navigate to={'/login'}/>
        return (
            <Component {...props as P} />
        )
    }
    return connect(mapStateToProps)(WithRedirect)
}