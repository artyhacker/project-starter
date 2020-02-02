import React, { useEffect } from 'react';
import { observer } from 'mobx-react';

import Store from './TodoStore';

const Todo: React.FC = observer(() => {
  useEffect(() => {
    const cInput = document.getElementById('input-text');
    if (cInput) {
      cInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          Store.addItem();
        }
      });
    }
  }, []);
  return (
    <div style={{
      width: '50rem',
      height: '50rem',
      margin: '10rem auto',
      border: '1px solid #f2f2f2',
      padding: '1rem',
      overflow: 'auto',
    }}
    >
      <div>
        <input
          type="text"
          onChange={(e) => Store.editText(e.target.value)}
          value={Store.text}
          id="input-text"
          placeholder="输入文字，按回车键添加"
          style={{ width: '50%', height: '2rem' }}
        />
        <button type="button" onClick={() => Store.addItem()} style={{ height: '2rem', width: '3rem', marginLeft: '1rem' }}>ADD</button>
      </div>
      <h1>Todo List</h1>
      {Store.list.map((todo) => (
        /* eslint-disable */
        <div
          onClick={() => Store.toggleItem(todo)}
          key={todo.id}
        >
          <input
            type="checkbox"
            value={todo.id}
            checked={todo.done}
            onChange={(e) => console.log(e)}
          />
          <span
            style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
          >
            {todo.text}
          </span>
        </div>
      ))}
      <div style={{ marginTop: '1rem' }}>
        <div>Total: {Store.list.length}</div>
        <div>unFinished: {Store.unFinishedCount}</div>
      </div>
    </div>
  );
});

export default Todo;
