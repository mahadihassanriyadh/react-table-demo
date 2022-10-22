import React from "react";

const ShowCount = ({ count, title }) => {
    console.log(`rendering showCount... ${title}`);
    return (
        <div>
            {title} is <span className="font-medium text-red-500">{count}</span>
        </div>
    );
};

export default React.memo(ShowCount);
