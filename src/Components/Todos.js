import React from 'react';
import { TodoItem } from "./TodoItem";

const Todos = (props) => {
    return (
        <div className="todos-container">
            <h3>My Tasks</h3>
            {props.todos.length === 0 ? (
                <div className="empty-state">
                    <p>No tasks remaining. You're all caught up!</p>
                </div>
            ) : (
                props.todos.map((todo) => (
                    <TodoItem 
                        key={todo.sno} 
                        todo={todo} 
                        onDelete={props.onDelete} 
                        updateTodo={props.updateTodo} 
                    />
                ))
            )}
        </div>
    );
};

export default Todos;
