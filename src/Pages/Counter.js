import React, { useCallback, useMemo, useState } from "react";
import Button from "../components/Counter/Button";
import ShowCount from "../components/Counter/ShowCount";
import Title from "../components/Counter/Title";

const Counter = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const incrementByOne = useCallback(() => {
        setCount1((prevCount) => prevCount + 1);
    }, []);
    const incrementByFive = useCallback(() => {
        setCount2((prevCount) => prevCount + 5);
    }, []);
    const isEvenOrOdd = useMemo(() => {
        let i = 0;
        while (i < 1000000000) i++;
        return count1 % 2 === 0 ? "Even" : "Odd";
    }, [count1]);
    return (
        <div className="container mx-auto mt-5">
            <Title />
            <ShowCount count={count1} title="Counter 01" />
            <p>Count 1 is {isEvenOrOdd}</p>
            <Button handleClick={incrementByOne}>Increament by 1</Button>
            <hr className="my-5" />
            <ShowCount count={count2} title="Counter 02" />
            <Button handleClick={incrementByFive}>Increament by 5</Button>
        </div>
    );
};

export default Counter;
