import React, { ChangeEvent } from 'react'

type InputPropsType = {
  setTitle: (title: string) => void
  title: string
}

function Input(props: InputPropsType) {

  const onchangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    // console.log(event.currentTarget.value)
    props.setTitle(event.currentTarget.value)  
  }

  return (
      <input value={props.title} onChange={onchangeInputHandler} type="text" />
  )
}

export default Input