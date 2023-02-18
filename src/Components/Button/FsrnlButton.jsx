import React from "react";
import "./ButtonStyles.css";

const FsrnlButton = ({text, onClickCb}) => {

    const onClickCbHandler = () => {
        if (!onClickCb) {
            throw Error("A Butto should contain a click call back function!")
        }

        onClickCb();
    }

    return (
        <button className="btn" onClick={onClickCbHandler}> {text} </button>
    )
}

export default FsrnlButton;
