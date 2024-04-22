import React, { ChangeEvent, ChangeEventHandler, KeyboardEvent, useState } from 'react';
import { FilterValuesType } from '../App';

type TaskType = {
  id: string
  title: string
  isDone: boolean
}

type PropsType = {
  todoListID: string
  title: string
  tasks: TaskType[]
  filter: FilterValuesType
  changeFilter: (todoListId: string, value: FilterValuesType) => void
  addTask: (todoListId: string, title: string) => void
  removeTask: (todoListId: string, id: string) => void
  changeStatus: (todoListId: string, taskId: string, isDone: boolean) => void
}

function TodoList(props:PropsType) {

  const[title, setTitle] = useState('')
  const[error, setError] = useState<string | null>(null)

  const addTaskHandler = () => {
    if(title.trim() !== '') {
      props.addTask(props.todoListID, title.trim());
    } else {
      setError('Title is required')
    }
    // setTitle('')
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement> ) => {
    setTitle(e.currentTarget.value)
  }
  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    setError(null);
    if(e.key === 'Enter') {
      addTaskHandler();
    }
  }

  const onAllClickHandler = () => {
    props.changeFilter(props.todoListID, 'all')
  }
  const onActiveClickHandler = () => {
    props.changeFilter(props.todoListID, 'active')
  }
  const onCompletedClickHandler = () => {
    props.changeFilter(props.todoListID, 'completed')
  }

  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input 
          onChange={onChangeHandler}
          onKeyDown={onKeyPressHandler} 
        />
        <button onClick={addTaskHandler}>+</button>
        {error && <div className='error-message'>{error}</div>} 
      </div>
      <ul>
        {props.tasks.map((t) => {
          const onclickHandler = () => {
            props.removeTask(props.todoListID, t.id)
          }
          const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            props.changeStatus(props.todoListID, t.id, e.currentTarget.checked)
          }
          return (
            <li key={t.id} className={t.isDone ? 'is-done' : ''}>
              <input 
                type="checkbox" 
                checked={t.isDone}
                onChange={onChangeHandler}
                className={error ? 'error' : ''}
              />
              <span>{t.title}</span>
              <button onClick={onclickHandler}>x</button>
            </li>
          )
        })}
        
      </ul>
      <button className={props.filter === 'all' ? 'active-filter' : ''} onClick={onAllClickHandler}>All</button>
      <button className={props.filter === 'active' ? 'active-filter' : ''} onClick={onActiveClickHandler}>Active</button>
      <button className={props.filter === 'completed' ? 'active-filter' : ''} onClick={onCompletedClickHandler}>Completed</button>
    </div>
  )
}

export default TodoList