import React from "react";

const Title = () => {
    console.log("rendering title...");
    return <h1 className="text-2xl font-bold">useCallback & useMemo Hook Tutorial</h1>;
};

export default React.memo(Title);
