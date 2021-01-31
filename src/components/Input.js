import React from 'react';
// import Task from "./Task";


const Input = props => {
    const { list, setList } = props;

    let task = {
        name: "",
        isComplete: false
    };

    const onChange = (event) => {
        task.name = event.target.value;
    };

    const onClick = (event) => {
        setList([...list, task]);
        event.target.value = "";
    }

    return(
        <div className="container d-flex flex-column mt-3">
            <h1 className="text-center">To Do List</h1>
            <input className="form-control col-6 text-center mt-3" onChange = {onChange} type="text" name="task" />
            <button className="btn btn-primary col-6 btn-block mt-3" onClick={onClick}>Add Task</button>
        </div>
    );
};
    
export default Input;