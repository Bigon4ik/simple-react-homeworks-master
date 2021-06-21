import React, {useState} from 'react';
import s from '../HW13.module.css';
import SuperCheckbox from '../../h4/common/c3-SuperCheckbox/SuperCheckbox';
import SuperButton from '../../h4/common/c2-SuperButton/SuperButton';
import { RequestAPI } from './requestAPI';


export function Request() {
    const [success, setSuccess] = useState<boolean>(false)
    const [state, setState] = useState(null)

    const onChangeButton = () => {
        RequestAPI.createRequest(success)
            .then((res)=>{
                setState(res.data.errorText)
            })
            .catch(rej=>{
                setState(rej.response.data.errorText)
            })
    }

    return (
        <div className={s.body}>
            <div>{`Response with server: ${JSON.stringify(state)} `}</div>
            <div>
                <SuperCheckbox
                checked={success}
                onChangeChecked={setSuccess}
                />
            </div>
            <div>
                <SuperButton onClick={onChangeButton}>start</SuperButton>
            </div>

        </div>
    )
}