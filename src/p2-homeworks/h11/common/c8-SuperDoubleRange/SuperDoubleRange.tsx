import React from 'react'
import {Slider, Typography} from '@material-ui/core';

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };
    function valuetext(value: number) {
        return `${value}°C`;
    }
    return (
        <>
            {/*DoubleRange*/}
            <Typography id="range-slider" gutterBottom>
                Temperature range
            </Typography>
            <Slider
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
