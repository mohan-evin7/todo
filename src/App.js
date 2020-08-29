import React, { useState } from 'react';
import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import Task from './components/Task' 

function App() {

  const [tasks,setTasks]= useState([]);

  function addtask(newTask)
  {
    setTasks(prevTasks =>{
      return [
        ...prevTasks,
        newTask
      ]
    });
    
    
  }

  function deletetask(id)
  {
    setTasks(prevTasks => {
      return prevTasks.filter((noteItem, index) => {
        return index !== id;
      });
    });
    
  }

  return (
    <div>
      <Header />
      <Form onAdd={addtask} />
      {tasks.map((item,index)=>{
        return (
          <Task 
            id={index}
            key={index}
            content={item.content}
            onDelete={deletetask}
          
          />

        )
      })}
      
      
    </div>
  );
}

export default App;
