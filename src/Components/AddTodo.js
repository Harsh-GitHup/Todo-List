import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            setErrorMessage("Title or Description cannot be blank");
        } else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
            setErrorMessage("");
        }
    };

    return (
        <div className="add-todo-section">
            <h3>Add a New Task</h3>
            {errorMessage && (
                <div className="alert">
                    {errorMessage}
                </div>
            )}
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">Task Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-control"
                        id="title"
                        placeholder="E.g., Complete the project"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Task Description</label>
                    <input
                        type="text"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        className="form-control"
                        id="desc"
                        placeholder="Add some details about this task"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Add Task
                </button>
            </form>
        </div>
    );
};

export default AddTodo;