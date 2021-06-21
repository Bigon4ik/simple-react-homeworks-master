import React from 'react';
import s from './HW12.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {changeThemeC} from './bll/themeReducer';
import SuperRadio from '../h7/common/c6-SuperRadio/SuperRadio';

const themes = ['dark', 'red', 'some'];

function HW12() {
    //const theme = 'some'; // useSelector
    const dispatch = useDispatch()
    const theme = useSelector<AppStoreType,string>(state => state.themes.themes)

    // useDispatch, onChangeCallback
    const onChangeCallback = (value:string) => {
dispatch(changeThemeC(value))

    }
    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <div>
                <SuperRadio
                    value={theme}
                    name={'radio'}
                    options={themes}
                    onChangeOption={onChangeCallback}
                />
            </div>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
