import React from 'react';
import s from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
}
const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    let path = '/dialog/' + props.id
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;
