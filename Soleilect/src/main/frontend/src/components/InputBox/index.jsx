import React, { forwardRef } from 'react';
import './style.css';

const InputBox = forwardRef((props, ref) => {
    const { label, type, error, placeholder, value,name, icon, message, onChange, onButtonClick, onkeyDown, pattern } = props;

    const onkeyDownHandler = (event) => {
        if (!onkeyDown) return;
        onkeyDown(event);
    };

    return (
        <div className='inputbox'>
            <div className='inputbox-label'>{label}</div>
            <div className={error ? 'inputbox-container-error' : 'inputbox-container'}>
                <input ref={ref} type={type} className='input' placeholder={placeholder} value={value} name={name} onChange={onChange} onKeyDown={onkeyDownHandler} pattern={pattern} />
                {onButtonClick !== undefined &&
                    <div className='icon-button' onClick={onButtonClick}>
                        {icon !== undefined &&
                            <div className={`icon ${icon}`}></div>
                        }
                    </div>
                }
            </div>
            {message !== undefined &&
                <div className='inputbox-message'>{message}</div>
            }
        </div>
    );
});

export default InputBox;