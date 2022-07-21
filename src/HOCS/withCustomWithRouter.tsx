import React from 'react';
import {useParams} from 'react-router-dom';

export const withCustomWithRouter = <P extends object>(Component: React.ComponentType<P>): React.FC<P> => {

    return function WithProps (props) {
        const params = useParams()
        return (
            <Component {...props} params={params} />
        )
    }
}









