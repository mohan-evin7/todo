import React, { useState } from 'react';


function Form (props){

    const [task,setTask]= useState({
        content:""
    
    });

    function handlechange(event){

        const {value}=event.target;
        setTask( prevtask =>{
            return {
                ...prevtask,
                content:value,
            
                
            };
        });
    }

    function handlesubmit(event)
    {
        props.onAdd(task);
        setTask({
            
            content: ""
          });
        event.preventDefault();
    }


    return (
        <div className="App">
        
          <form id="to-do-form">
            <input type="text" name="content" placeholder="Enter task" onChange={handlechange} value={task.content}></input>
            <button type="submit" onClick={handlesubmit}>Add</button>
          </form>
        </div>

    );
}

export default Form;