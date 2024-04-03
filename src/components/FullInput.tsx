import { log } from 'console';
import React, { ChangeEvent, useState } from 'react';

type FullInputPropsType = {
  addMessage: (title: string) => void
}

function FullInput(props: FullInputPropsType) {
  let [title, setTitle] = useState('')
  // console.log(title)

  const onchangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    // console.log(event.currentTarget.value)
    setTitle(event.currentTarget.value)  
  }

  const onClickButtonHandler = () => {
    props.addMessage(title)
    setTitle('')
  }

  return (
    <div>
      <input value={title} onChange={onchangeInputHandler} type="text" />
      <button onClick={onClickButtonHandler}>+</button>
    </div>
  )
}

export default FullInput