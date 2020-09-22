import React, { useEffect, useState } from 'react';
import { Slider } from './components/Slider';
import { CopyBox } from './components/CopyBox';
import './App.css';

const initialColor = () => {
    return (
        JSON.parse(localStorage.getItem('rgbColor')) || {
            red: 0,
            green: 0,
            blue: 0,
        }
    );
};

const App = () => {
    const [rgbColor, setRgbColor] = useState(initialColor);

    useEffect(() => {
        document.documentElement.style.setProperty('--red', rgbColor.red);
        document.documentElement.style.setProperty('--green', rgbColor.green);
        document.documentElement.style.setProperty('--blue', rgbColor.blue);
        localStorage.setItem('rgbColor', JSON.stringify(rgbColor));
    }, [rgbColor]);

    const updateColor = (colorName, newColor) => {
        setRgbColor({ ...rgbColor, [colorName]: newColor });
    };

    return (
        <>
            <CopyBox rgbColor={rgbColor} />
            <Slider
                colorName="red"
                colorValue={rgbColor.red}
                updateColor={updateColor}
            />
            <Slider
                colorName="green"
                colorValue={rgbColor.green}
                updateColor={updateColor}
            />
            <Slider
                colorName="blue"
                colorValue={rgbColor.blue}
                updateColor={updateColor}
            />
        </>
    );
};

export default App;
