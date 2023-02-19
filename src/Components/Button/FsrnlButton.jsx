import React from "react";
import "./ButtonStyles.css";

const FsrnlButton = ({text, onClickCb, style}) => {

    const onClickCbHandler = () => {
        if (!onClickCb) {
            throw Error("A Butto should contain a click call back function!")
        }

        onClickCb();
    }

    return (
        <button className="btn" style={{...style}} onClick={onClickCbHandler}> {text} </button>
    )
}

export default FsrnlButton;
