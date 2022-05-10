import React from 'react';
import s from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../Redux/state";

type DialogItemPropsType = DialogType

const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    let path = '/dialog/' + props.id
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;
