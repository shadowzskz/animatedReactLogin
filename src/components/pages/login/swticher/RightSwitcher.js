import React from 'react';
import "./RightSwitcher.scss";

function RightSwitcher({ current,isLogginActive,onClick }) {
    return (
        <div className={`right_side ${isLogginActive ? "right" : "left"}`} onClick={onClick}>
            <div className="inner_container">
                <div className="text">
                    {current}
                </div>
            </div>
        </div>
    )
}

export default RightSwitcher