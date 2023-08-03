import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import './colorpicker.css'
const colors = [
    { id: '1', value: '#8B795E' },
    { id: '2', value: '#1F1CFF' },
    { id: '3', value: '#FFE40E' },
    { id: '4', value: '#EEE8AA' },
    { id: '5', value: '#A0522D' },
    { id: '6', value: '#F4A460' },
    { id: '7', value: '#E0EEE0' },
    { id: '8', value: '#CDB7B5' },
    { id: '9', value: '#0000FF' },
    { id: '7', value: '#40E0D0' },
    { id: '8', value: '#54FF9F' },
    { id: '9', value: '#9ACD32' }
];

function ColorPicker() {
    const [color, setColor] = useState('#8B795E');
    const [hue, setHue] = useState(30);
    const [saturation, setSaturation] = useState(50);
    const [lightness, setLightness] = useState(50);

    const handleHueChange = (e: ChangeEvent<HTMLInputElement>) => {
        setHue(Number(e.target.value));
    };

    const handleSaturationChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSaturation(Number(e.target.value));
    };

    const handleLightnessChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLightness(Number(e.target.value));
    };

    const handleColorSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setColor(`hsl(${hue}, ${saturation}%, ${lightness}%)`);
    };

    const handleColorSelection = (selectedColor: string) => {
        setColor(selectedColor);
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLButtonElement>) => {
        if (e.key === 'Enter' || e.key === ' ') {
            handleColorSelection(e.currentTarget.getAttribute('data-color') || '');
        }
    };

    return (
        <div>
            <h1>COLOR PICKER</h1>
            <div className="preview" aria-label="Current Color:">
                <div style={{ backgroundColor: color, width: 900, height: 200 }} />
            </div>
            <p>Choose color: </p>
            <div className="colors-container">
                {colors.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => handleColorSelection(item.value)}
                        onKeyDown={handleKeyPress}
                        data-color={item.value}
                        style={{ backgroundColor: item.value, width: 50, height: 50, margin: '10px', cursor: 'pointer' }}
                        tabIndex={0}
                        aria-label={`Select color ${item.id}`}
                    >
                        {' '}
                    </button>
                ))}
            </div>
            <form onSubmit={handleColorSubmit} style={{ marginTop: '20px' }}>
                <label htmlFor="hue">Hue:</label>
                <input
                    type="range"
                    id="hue"
                    min="0"
                    max="360"
                    value={hue}
                    onChange={handleHueChange}
                />
                <label htmlFor="saturation">Saturation:</label>
                <input
                    type="range"
                    id="saturation"
                    min="0"
                    max="100"
                    value={saturation}
                    onChange={handleSaturationChange}
                />
                <label htmlFor="lightness">Lightness:</label>
                <input
                    type="range"
                    id="lightness"
                    min="0"
                    max="100"
                    value={lightness}
                    onChange={handleLightnessChange}
                />
                <button type="submit" style={{ backgroundColor: 'red', color: 'white', padding: '5px 10px' }}>
                    Pick a Color
                </button>
            </form>
        </div>
    );
}

export default ColorPicker;
