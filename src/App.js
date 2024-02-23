import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import React from "react";

function App() {
    return (
        <div className={"todoApp"}>
            <TodoList />
        </div>
    )
}


export default App;