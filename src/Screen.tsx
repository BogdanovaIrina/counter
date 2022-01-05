import React from 'react';

type ScreenPropsType = {
    count:number
}
export const Screen = ({count,...props}: ScreenPropsType) => {

    return <h1 className={count===5 || count===0? 'error': ''}>{count}</h1>
}