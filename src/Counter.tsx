import React, {useState} from 'react';
import './Counter.css';
import {Button} from "./Button";
import {Screen} from "./Screen";

const Counter = () => {

    const [count, setCount] = useState<number>(0)

    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)




    return (
        <div className={'main'}>

            <div className={'count'}>

                <Screen count={count}/>

            </div>
            <div className={"buttons"}>

                <Button name={'inc'}  callBack={increment} disable={count>4}/>
                <Button name={'reset'} callBack={decrement} disable={count<1}/>

            </div>

        </div>
    );
}

export default Counter;
