import React from 'react';
import TodoList from './TodoList';

function TodoContainer(props) {
  return (
    <div className="TodoContainer">
      <ul>
        {props.items.map((item, index) => (
          <TodoList key={index} item={item} index={index} deleteItem={props.deleteItem} />
        ))}
      </ul>
    </div>
  );
}

export default TodoContainer;