import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NewComponent from './components/NewComponent';
import Button from './components/Button';
import Component from './components/Component';
import { Currency } from './components/Currency';

function App_1() {

  const Button1Foo = (subscriber: string, age: number, address: string) => {
    console.log(subscriber, age, address)
  }
  const Button2Foo = (subscriber: string) => {
    console.log(subscriber)
  }
  const Button3Foo = () => {
    console.log('Im stupid button')
  }
  const Button4Foo = (title: string) => {
    console.log(title)
  }
  const Button5Foo = (title: string) => {
    console.log(title)
  }
  const Button6Foo = (title: string) => {
    console.log(title)
  }

  return (
    <div className="App">
      {/* <NewComponent/> */}
      <Button name={'MyYouTubeChanel-1'} callBack={() => Button1Foo('Im Vasya', 21, 'live in Minsk')}/>
      <Button name={'MyYouTubeChanel-2'} callBack={() => Button2Foo('Im Ivan')}/>
      <Button name={'Stupid Button'} callBack={Button3Foo}/>
      <Button name={'all'} callBack={() => Button4Foo('all')}/>
      <Button name={'ruble'} callBack={() => Button5Foo('ruble')}/>
      <Button name={'dollars'} callBack={() => Button6Foo('dollars')}/>
    </div>
  );
}

function App_2() {
  let[a, setA] = useState(0)

  const onClickHandler = () => {
    setA(a + 1);
    console.log(a)
  }
  const onClickHandlerReset = () => {
    setA(0);
  }
  return (
    <div className="App">
      <h1>{a}</h1>
      <button onClick={onClickHandler}>number</button>
      <button onClick={onClickHandlerReset}>0</button>
    </div>
  )
}


export type MoneyType = {
  banknots: string
  value: number
  number: string
}
export type FilterType = 'all' | 'Dollars' | 'RUBLS';

function App() {
  let [money, setMoney] = useState([
    { banknots: 'Dollars', value: 100, number: ' a1234567890' },
    { banknots: 'Dollars', value: 50, number: ' z1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
    { banknots: 'Dollars', value: 100, number: ' e1234567890' },
    { banknots: 'Dollars', value: 50, number: ' c1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
    { banknots: 'Dollars', value: 50, number: ' x1234567890' },
    { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
  ]) 

  const [filter, setFilter] = useState<FilterType>('all')
  
  let currentMoney = money;
  // если nameButton === 'dollar'
  if(filter === 'Dollars') {
    currentMoney = money.filter((filteredMoney)=>filteredMoney.banknots === 'Dollars');
  } 
  if(filter === 'RUBLS') {
    // если nameButton === 'ruble'
    currentMoney = money.filter((filteredMoney)=>filteredMoney.banknots === 'RUBLS');
  }
  
  const onClickFilterHandler = (nameButton: FilterType) => {
    console.log(nameButton)
    setFilter(nameButton)
  }

  return (
    <div>
      <Component  currentMoney={currentMoney} onClickFilterHandler={onClickFilterHandler}/>
    </div>
  )
}

export default App;
