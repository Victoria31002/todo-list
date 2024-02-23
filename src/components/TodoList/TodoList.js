import React, {useEffect, useState} from 'react';
import TodoItem from "../TodoItem/TodoItem";
import FilterTodo from "../FilterTodo/FilterTodo";

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [filteredTasks, setFilteredTasks] = useState([]);

    useEffect(() => {
        setFilteredTasks(tasks);
    }, [tasks]);

    function filterTasks(status) {
        if (status === 'active') {
            setFilteredTasks(tasks.filter((task) => !task.completed));
        }
        if (status === 'completed') {
            setFilteredTasks(tasks.filter((task) => task.completed));
        }
        if (status === 'all') {
            setFilteredTasks(tasks);
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    };

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, {name: newTask, completed: false}]);
            setNewTask('');
        }
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const deleteCompletedTasks = () => {
        const newTasks = tasks.filter((task) => !task.completed);
        setTasks(newTasks);
    };

    const completedTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };

    const handleTaskChange = (index, event) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].name = event.target.value;
        setTasks(updatedTasks);
    };

    return (
        <div>
            <h1 className="todoapp-title">Todos</h1>
            <div className="todoApp-content">
                <header className="todoapp-header">
                    <input
                        className="todoapp-new-todo"
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder="What needs to be done?"
                        onKeyDown={handleKeyPress}
                    />
                </header>
                <section className="todoapp-main">
                    <div>
                        {filteredTasks.map((task, index) => (
                            <TodoItem
                                task={task}
                                index={index}
                                handleTaskChange={handleTaskChange}
                                deleteTask={deleteTask}
                                completedTask={completedTask}
                            />
                        ))}
                    </div>
                </section>
                <footer className={"todoapp-footer"}>
                    <span className={"todo-count"}>{tasks.length} tasks</span>
                   <FilterTodo
                   filterTasks={filterTasks}
                   />
                    <button type="button" className="btn todoapp-clear-completed" onClick={deleteCompletedTasks}>
                        Clear Completed
                    </button>
                </footer>
            </div>
        </div>
    );
}

export default TodoList;