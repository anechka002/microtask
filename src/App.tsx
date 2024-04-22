import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NewComponent from './components/NewComponent';
import Button from './components/Button';
import Component from './components/Component';
import { Currency } from './components/Currency';
import FullInput from './components/FullInput';
import Input from './components/Input';
import Button1 from './components/Button1';
import { v1 } from 'uuid'
import TodoList from './components/TodoList';

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

function App_3() {
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

export type MessageType = {
  message: string
}
function App_4() {
  const [message, setMessage] = useState([
    {message: 'message1'},
    {message: 'message2'},
    {message: 'message3'},
  ])

  let [title, setTitle] = useState('')
  // console.log(title)

  const addMessage = (title: string) => {
    // console.log(title)
    let newMessage = {message: title}
    setMessage([newMessage, ...message])
  }

  const callBackButtonHandler = () => {
    addMessage(title)
    setTitle('')
  }

  return (
    <div>
      <FullInput addMessage={addMessage}/>
      <Input setTitle={setTitle} title={title}/>
      <Button1 name='add' callBack={callBackButtonHandler}/>
      {message.map((m, index)=>{
        return (
          <div key={index}>{m.message}</div>
        )
      })}
    </div>
  )
}

export type todoListType = {
  id: string
  title: string
  filter: FilterValuesType
}
export type FilterValuesType = 'all' | 'active' | 'completed';

function App() {
  const todoListID1=v1();
  const todoListID2=v1();

  const [todoList, setTodoList] = useState<todoListType[]>([
    {id: todoListID1, title: 'What to learn', filter: 'all'},
    {id: todoListID2, title: 'What to buy', filter: 'all'},
  ]);

  let [tasks, setTasks] = useState({
    [todoListID1]:[
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Rest API", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false},
    ],
    [todoListID2]:[
        {id: v1(), title: "HTML&CSS2", isDone: true},
        {id: v1(), title: "JS2", isDone: true},
        {id: v1(), title: "ReactJS2", isDone: false},
        {id: v1(), title: "Rest API2", isDone: false},
        {id: v1(), title: "GraphQL2", isDone: false},
    ]
  });

  const changeFilter = (todoListId: string, value:FilterValuesType) => {
    setTodoList(todoList.map(filtered => filtered.id === todoListId ? {...filtered, filter: value} : filtered))
  }

  const addTask = (todoListId: string, title: string) => {
    let newTask = {id: v1(), title: title, isDone: false}
    setTasks({...tasks,[todoListId]:[newTask, ...tasks[todoListId]]})
  }

  const removeTask = (todoListId: string, id: string) => {
    let filteredTasks = {...tasks, [todoListId]:tasks[todoListId].filter((t) => t.id != id)}
    setTasks(filteredTasks)
  }

  const changeStatus = (todoListId: string, taskId: string, isDone: boolean) => {
    setTasks({...tasks, [todoListId]:[...tasks[todoListId]].map(m => m.id === taskId ? {...m, isDone:isDone} : m)})
  }

  return (
    <div className='App'>
      {todoList.map((mapTodoLists) => {
        let taskForTodoList = tasks[mapTodoLists.id];

        if(mapTodoLists.filter === 'active') {
          taskForTodoList = tasks[mapTodoLists.id].filter(t => t.isDone === false)
        }

        if(mapTodoLists.filter === 'completed') {
          taskForTodoList = tasks[mapTodoLists.id].filter(t => t.isDone === true)
        }
        return (
          <TodoList
            key={mapTodoLists.id}
            todoListID={mapTodoLists.id}
            title={mapTodoLists.title}
            tasks={taskForTodoList}
            changeFilter={changeFilter}
            filter={mapTodoLists.filter}
            addTask={addTask}
            removeTask={removeTask}
            changeStatus={changeStatus}
          />
        )
      })}
    </div>
  )
}

export default App;
