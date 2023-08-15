import React, { useState } from 'react';
import './colorpicker.css';

import ColorItem from './ColorItem';
import ColorForm from './ColorForm';

export default function ColorPicker() {
    const [color, setColor] = useState('#8B795E');

    const handleColorSelection = (selectedColor: string) => {
        setColor(selectedColor);
    };

    return (
        <div>
            <h1>COLOR PICKER</h1>
            <div className="preview" aria-label="Current Color:">
                <div style={{ backgroundColor: color, width: 900, height: 200 }} />
            </div>
            <p>Choose color: </p>
            <ColorItem onClick={handleColorSelection} />
            <ColorForm onSubmit={setColor} />
        </div>
    );
}
