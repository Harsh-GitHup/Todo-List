import React, { useState } from 'react';

export const TodoItem = ({ todo, onDelete, updateTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedTitle, setUpdatedTitle] = useState(todo.title);
    const [updatedDesc, setUpdatedDesc] = useState(todo.desc);

    const handleUpdate = () => {
        updateTodo(todo.sno, updatedTitle, updatedDesc);
        setIsEditing(false);
    };

    return (
        <div className="todo-item">
            {isEditing ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <input
                        className="form-control"
                        type="text"
                        value={updatedTitle}
                        onChange={(e) => setUpdatedTitle(e.target.value)}
                        placeholder="Title"
                    />
                    <input
                        className="form-control"
                        type="text"
                        value={updatedDesc}
                        onChange={(e) => setUpdatedDesc(e.target.value)}
                        placeholder="Description"
                    />
                    <div className="todo-actions" style={{ marginTop: '0.5rem' }}>
                        <button className="btn btn-primary" onClick={handleUpdate}>
                            Save Changes
                        </button>
                        <button className="btn btn-danger" onClick={() => setIsEditing(false)}>
                            Cancel
                        </button>
                    </div>
                </div>
            ) : (
                <>
                    <h4>{todo.title}</h4>
                    <p>{todo.desc}</p>
                    <div className="todo-actions">
                        <button className="btn btn-success" onClick={() => setIsEditing(true)}>
                            Edit
                        </button>
                        <button className="btn btn-danger" onClick={() => onDelete(todo)}>
                            Delete
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};
