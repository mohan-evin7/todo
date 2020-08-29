import React from 'react';
import '../Task.css'


function Task(props){

    function handlechange()
    {
        props.onDelete(props.id);
    }


    return (
        <div className="list">
            <p>{props.content}<button onClick={handlechange}>delete</button></p>
            
        </div>
    );
}

export default  Task;