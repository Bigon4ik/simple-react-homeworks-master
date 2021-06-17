import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from 'react-redux';

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = 'some'; // useSelector
const dispatch=useDispatch()
const log=useSelector(()=>{})

    // useDispatch, onChangeCallback
const onChangeCallback=()=>{

}
    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
