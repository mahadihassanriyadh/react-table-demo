import React, { useState } from "react";
import Button from "../components/Counter/Button";
import ShowCount from "../components/Counter/ShowCount";
import Title from "../components/Counter/Title";

const Counter = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const incrementByOne = () => {
        setCount1((prevCount) => prevCount + 1);
    };
    const incrementByFive = () => {
        setCount2((prevCount) => prevCount + 5);
    };
    return (
        <div className="container mx-auto mt-5">
            <Title />
            <ShowCount count={count1} title="Counter 01" />
            <Button handleClick={incrementByOne}>Increament by 1</Button>
            <hr className="my-5" />
            <ShowCount count={count2} title="Counter 02" />
            <Button handleClick={incrementByFive}>Increament by 5</Button>
        </div>
    );
};

export default Counter;
