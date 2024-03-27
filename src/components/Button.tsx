import React from 'react';

type ButtonPropsType = {
  name: string
  callBack: () => void
}

function Button({name, callBack}: ButtonPropsType) {
  // const myFirstSubscriber = () => {
  //   console.log('Hello im Vasya')
  // }
  // const mySecondSubscriber = () => {
  //   console.log('Hello im Ivan')
  // }

  // const onClickHandler = (num?: number) => {
  //   console.log(num ? num : 100)
  // }

  const onClickHandler = () => {
    callBack()
  }
  return (
    <div>
      {/* <button onClick={(e)=>{console.log('Hello')}}>Button</button> */}
      {/* <button onClick={(e)=>onClickHandler()}>1</button>
      <button onClick={(e)=>onClickHandler(100200)}>2</button> */}
      {/* <button onClick={(e) => onClickHandler('Vasya')}>{name}</button> */}
      {/* <button onClick={(e) => onClickHandler('Ivan')}>{name}</button> */}
      <button onClick={onClickHandler}>{name}</button>
    </div>
    )
}

export default Button