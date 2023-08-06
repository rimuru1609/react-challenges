import { KeyboardEvent } from 'react';

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
    { id: '10', value: '#40E0D0' },
    { id: '11', value: '#54FF9F' },
    { id: '12', value: '#9ACD32' },
    { id: '13', value: '#FF0E3C' }
];

type ColorItemProps = {
    onClick: (selectedColor: string) => void;
};

const ColorItem: React.FC<ColorItemProps> = ({ onClick }) => {
    const handleKeyPress = (e: KeyboardEvent<HTMLButtonElement>) => {
        if (e.key === 'Enter' || e.key === ' ') {
            onClick(e.currentTarget.getAttribute('data-color') || '');
        }
    };

    return (
        <div className="colors-container">
            {colors.map((item) => (
                <button
                    key={item.id}
                    onClick={() => onClick(item.value)}
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
    );
};

export default ColorItem;
