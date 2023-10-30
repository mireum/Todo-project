import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import TodoLeftList from './TodoLeftList';
import TodoRightUpperList from './TodoRightUpperList';
import TodoRightLowerList from './TodoRightLowerList';

const TodoFrameWrapper = styled.div`
  width: 768px;
  margin: 0 auto;
  margin-top: 6rem;
  border-radius: 10px;

  .title {
    height: 4rem;
    background: #22b8cf;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
    border-radius: 10px 10px 0 0;
  }
  
  .contentFunc {
    /* height: 56px; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* position: relative; */
  }
  
  .styledDate {
    width: 300px;
    height: 56px;
    background: #788a9b;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
    flex: 1;
  }

  .inputTodo {
    background: cyan;
  }
  
  .content {
    display: flex;
  }

  .leftContent {
    background: #cab7b7;
    width: 50%;
    border-radius: 0 0 0 10px;
  }

  .rightContent {
    background: #cab7b7;
    width: 50%;
    border-left: 1px solid gray;
    overflow-y: auto;
    border-radius: 0 0 10px 0;
  }
`;

function TodoFrame(props) {
  const { todos, onRemove, onToggle, onView, onAmend, rightTodos, children } = props;
  console.log(todos);
  const [time, setTime] = useState(new Date());

  return (
    <TodoFrameWrapper>
      <div className='title'>일정 관리 앱</div>
      <div className='contentFunc'>
        <div className='styledDate'>
          {'오늘 날짜: '+time.toLocaleDateString()}
        </div>
        <div className='inputTodo'>{children}</div>
      </div>
      <div className='content'>
        <div className='leftContent'>
          <TodoLeftList todos={todos} onRemove={onRemove} onToggle={onToggle} onView={onView}/>
        </div>

        <div className='rightContent'>
          <TodoRightUpperList rightTodos={rightTodos} onAmend={onAmend} />
          <TodoRightLowerList todos={todos} onToggle={onToggle}/>
        </div>
      </div>   
    </TodoFrameWrapper>
  );
}

export default TodoFrame;