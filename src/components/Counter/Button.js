import React from "react";

const Button = ({ handleClick, children }) => {
    console.log(`rendering button... ${children}`);
    
    return (
        <p>
            <button className="bg-red-100 border border-red-500 py-1 px-2 rounded text-xs my-2" type="button" onClick={handleClick}>
                {children}
            </button>
        </p>
    );
};

export default Button;
