import React, { useState } from 'react';



function Input({ placeholder, width, height, valueIn }) {
    const [value, setValue] = useState(valueIn);
    const style = {
        margin: '0.5rem 1rem',
        border: '1px solid #E5E5E5',
        borderRadius: '5px 5px 5px 5px',
        outline: 'none',
    };

    style.width = width ? `${width}` : 'calc(100% - 2rem)';
    style.height = height ? `${height}` : '2.875rem';

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <input 
            type="text" 
            value={value} 
            style={style} 
            placeholder={placeholder} 
            onChange={handleChange}
        />

    )
}

export default Input;
