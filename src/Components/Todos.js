// Todos.js
import React from 'react';
import { TodoItem } from "./TodoItem";

const Todos = (props) => {
    const myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    };

    return (
        <div className="container" style={myStyle}>
            <h3 className="my-3">Todos List</h3>
            {props.todos.length === 0 ? (
                <p>No Todos to display</p>
            ) : (
                props.todos.map((todo, index) => (
                    <TodoItem 
                        key={todo.sno} 
                        todo={todo} 
                        onDelete={props.onDelete} 
                        updateTodo={props.updateTodo} 
                        isLastItem={index === props.todos.length - 1} 
                        index={index}
                    />
                ))
            )}
        </div>
    );
};

export default Todos;
