import { useState, ChangeEvent } from 'react';

type ColorFormProps = {
    onSubmit: (color: string) => void;
};

const ColorForm: React.FC<ColorFormProps> = ({ onSubmit }) => {
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
        onSubmit(`hsl(${hue}, ${saturation}%, ${lightness}%)`);
    };

    return (
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
    );
};

export default ColorForm;
