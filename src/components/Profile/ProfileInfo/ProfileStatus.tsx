import React from 'react';
import s from './ProfileStatus.module.css'

type ProfileStatusType = {
    status: string | null
    updateStatus: (statusText: string) => void
}

export const ProfileStatus: React.FC<ProfileStatusType> = (props) => {
    const [isEditMode, setIsEditMode] = React.useState(false)
    const [statusText, setStatusText] = React.useState<string | null>(props.status)

    React.useEffect(() => {
        setStatusText(props.status)
    }, [props.status])

    const onDoubleClickHandler = () => {
        setIsEditMode(true)
    }

    const onBlurHandler = () => {
        setIsEditMode(false)
        if (props.status === statusText) return
        if (statusText) props.updateStatus(statusText.trim())
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatusText(e.currentTarget.value)
    }

    return (
        <div className={s.statusBlock}>
            {!isEditMode
                ? <span className={s.status} onDoubleClick={onDoubleClickHandler}>
                  💬 {props.status ? props.status : <span style={{color: '#999'}}>change status🖆</span>}
                  </span>
                : <input
                    value={statusText!}
                    onBlur={onBlurHandler}
                    onChange={onChangeHandler}
                    autoFocus={true}/>
            }
        </div>
    )
}

