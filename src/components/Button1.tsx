import React from 'react';

type Button1propsType = {
  name: string
  callBack: () => void
}

function Button1(props: Button1propsType) {

  const onClickButton1Handler = () => {
    props.callBack()
  }
  return (
      <button onClick={onClickButton1Handler}>{props.name}</button>
  )
}

export default Button1