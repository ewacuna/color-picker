import React from 'react';
import './Slider.css';

export const Slider = ({ colorName, colorValue, updateColor }) => {
    return (
        <>
            <input
                type="range"
                value={colorValue}
                step="1"
                min={0}
                max={255}
                name={colorName}
                onChange={(e) => {
                    updateColor(e.target.name, e.target.value);
                }}
            />
        </>
    );
};
