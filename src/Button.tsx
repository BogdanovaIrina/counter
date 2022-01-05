import React from 'react';

type ButtonPropsType = {
    name: string
    callBack: () => void
    disable: boolean
}
export const Button = ({name, callBack, disable,...props}: ButtonPropsType) => {

    const onClickHandler = () => callBack()

    return <button onClick={onClickHandler} disabled={disable}>{name}</button>
}