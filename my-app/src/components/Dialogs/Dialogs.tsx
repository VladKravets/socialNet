import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
}
const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    let path='/dialog/' + props.id
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


type MessageItemPropsType={
    message:string
}
const MessageItem:React.FC<MessageItemPropsType>=(props)=>{
    return <div className={s.message}>{props.message}</div>
}


const Dialogs = () => {
    return (
        <div className={s.dialogs}>

            <div className={"s.dialogs-items"}>
                <DialogItem name={'Vlad'} id={1}/>
                <DialogItem name={'Natasha'} id={2}/>
                <DialogItem name={'Yuliana'} id={3}/>
                <DialogItem name={'Sveta'} id={4}/>
                <DialogItem name={'Alexander'} id={5}/>
                <DialogItem name={'Mihail'} id={6}/>
            </div>



            <div className={s.messages}>
                <MessageItem message={'Hi'}/>
                <MessageItem message={'How are you?'}/>
                <MessageItem message={'All okey'}/>
                <MessageItem message={'Hello everyone'}/>
                <MessageItem message={'I ♥ you'}/>
                <MessageItem message={'Where are you?'}/>
            </div>
        </div>

    );
};

export default Dialogs;
