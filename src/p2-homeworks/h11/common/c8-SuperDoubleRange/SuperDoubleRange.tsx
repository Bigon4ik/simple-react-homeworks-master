import React from 'react'
import {Slider, Typography} from '@material-ui/core';

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number | number[]) => void
    value: [number, number]
    onChangeRangeO?: (value: number) => void
    // min, max, step, disable, ...
}
function valuetext(value: number) {
    return `${value}°C`;
}
const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {

        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    //сделать самому, можно подключать библиотеки
    // const handleChange = (event: any, newValue: number | number[]) => {
    //     //setValue(newValue as number[]);
    // };
    // function valuetext(value: number) {
    //     return `${value}°C`;
    // }

    const handleChange = (event: React.ChangeEvent<{}>, value: (number | number[])) => {
        onChangeRange && onChangeRange(value as number)
    };

    return (
        <>
            {/*DoubleRange*/}
            <Typography id="range-slider" gutterBottom>

            </Typography>
            <Slider
                style={{
                    color: 'red',
                    width: 500
                }}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />
        </>
    )
}

export default SuperDoubleRange
