import React from "react";

function FilterTodo({ filterTasks}){
    return(
        <nav className={"filter"}>
            <button onClick={() => filterTasks('all')} className="btn filter-link">
                All
            </button>
            <button onClick={() => filterTasks('active')} className="btn filter-link">
                Active
            </button>
            <button onClick={() => filterTasks('completed')} className="btn filter-link">
                Completed
            </button>
        </nav>
    )
}
export default FilterTodo