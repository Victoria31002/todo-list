import React from "react";

function TodoItem({task, index, handleTaskChange, deleteTask, completedTask}) {
    return (
        <div key={index} className={`todo ${task.completed ? 'completed' : ''}`}>
            <label className="todo-status-label">
                <input
                    type="checkbox"
                    className={"todo-status"}
                    checked={task.completed}
                    onChange={() => completedTask(index)}
                />
            </label>
            <input
                className={"todo-title"}
                value={task.name}
                onChange={(e) => handleTaskChange(index, e)}
            />
            <button className="todo-remove" onClick={() => deleteTask(index)}>
                ×
            </button>
        </div>
    )
}

export default TodoItem