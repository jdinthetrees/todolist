import React from 'react';




const Task = (props) => {
    const { task, index, list, setList} = props;
    const onClick = () => {
        setList(() => {
            return list.filter(task => list.indexOf(task) !== index);
        });
    };


    const onChange = (event) => {
            list[index].isComplete = !list[index].isComplete;
            setList([...list]);
        };
    

    return (
        <div className="container mt-3 task">
            <div className="container cole-6 text-center">
                <input onChange={onChange} type="checkbox" checked={task.isComplete} />
                <label htmlFor="checkbox mt-5"><p className="m-2">{task.name}</p></label>
                <i class="far fa-trash-alt" onClick={onClick}></i>
            </div>
        </div>
    )

    };
    
export default Task;