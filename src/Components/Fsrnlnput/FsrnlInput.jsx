import React from "react";
import "./FsrnlInputStyles.css"

export const INPUT_TYPES = {
    'INPUT_TXT': 'INPUT_TEXT',
    'INPUT_PASSWORD': 'INPUT_PASSWORD',
    'INPUT_TXT_AREA': 'INPUT_TXT_AREA'
};

const FsrnlInput = ({ type, style, placeholder, onChangeCb }) => {

    const onChangeCallBackHandler = (event) => {
        const value = event.target.value;
        onChangeCb(value);
    }

    const getInputBasedOnType = (type, style, placeholder, onChangeCb) => {
        let inputJsx = null;
        switch (type) {
            case INPUT_TYPES.INPUT_TXT:
                inputJsx = (
                    <input
                        type='text'
                        style={{ ...style }}
                        placeholder={placeholder}
                        onChange={onChangeCallBackHandler}
                    />);
                break;
            case INPUT_TYPES.INPUT_PASSWORD:
                inputJsx = (
                    <input 
                        type="password" 
                        style={{ ...style }} 
                        placeholder={placeholder} 
                        onChange={onChangeCallBackHandler} 
                    />);
                break;
            case INPUT_TYPES.INPUT_TXT_AREA: 
                    inputJsx = (
                        <textarea 
                            style={{...style}}
                            placeholder={placeholder}
                            onChange={onChangeCallBackHandler}
                            rows={4} 
                            cols={40}
                        />
                    );
                    break;
            default:
                inputJsx = null;
        }

        return inputJsx;
    }

    return (
        <div className="fsrnl-input-container">
            {getInputBasedOnType(type, style, placeholder)}
        </div>
    );
}

export default FsrnlInput;