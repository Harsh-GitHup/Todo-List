import React, { useState } from 'react';

export const TodoItem = ({ todo, onDelete, isLastItem, updateTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedTitle, setUpdatedTitle] = useState(todo.title);
    const [updatedDesc, setUpdatedDesc] = useState(todo.desc);

    const handleUpdate = () => {
        updateTodo(todo.sno, updatedTitle, updatedDesc);
        setIsEditing(false);
    };

    return (
        <div>
            {isEditing ? (
                <>
                    <input
                        className="form-lable pb-1 ps-2"
                        type="text"
                        value={updatedTitle}
                        onChange={(e) => setUpdatedTitle(e.target.value)}
                        placeholder="Title"
                    />
                    <input
                        className="form-lable ms-4 pb-1 ps-2"
                        type="text"
                        value={updatedDesc}
                        onChange={(e) => setUpdatedDesc(e.target.value)}
                        placeholder="Description"
                    />
                    <button className="btn btn-sm btn-info mb-1 ms-4" onClick={handleUpdate}>
                        Save
                    </button>
                </>
            ) : (
                <>
                    <h4>{todo.title}</h4>
                    <p>{todo.desc}</p>
                    <button className="btn btn-sm btn-danger" onClick={() => onDelete(todo)}>
                        Delete
                    </button>
                    <button className="btn btn-sm btn-success mx-4" onClick={() => setIsEditing(true)}>
                        Edit
                    </button>
                </>
            )}
            {isLastItem ? null : <hr />}
        </div>
    );
};
