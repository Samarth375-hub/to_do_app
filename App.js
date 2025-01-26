import React ,{ useState } from 'react';


function App(){
  const [task,settask] = useState('');
  const [tasks,settasks] = useState([]);

  const addTask = () =>{
    if(task.trim()){
      settasks([...tasks,{text:task,completed:false}]);
      settask('')
    }
  };

  const toggleComplete = (index) =>{
    const newtasks = [...tasks];
    newtasks[index].completed = !newtasks[index].completed;
    settasks(newtasks);
  };
   
  const deletetask =(index) =>{
    settasks(tasks.filter((_,i) => i!==index));
  };


  return (
    <div>
      <h1>React TO-DO App</h1>
      <input
      type = 'text'
      value = {task}
      onChange={(e) => settask(e.target.value)}
      placeholder='Enter a task'
      />
      <button onClick={() => addTask()}> ADD TASK</button>
      <ul>
    {tasks.map((t,index)=>(
    <li key = {index}>
      <span
      style={{
        textDecoration:t.completed?'line-through' : 'none',
      }}
      onClick={()=> toggleComplete(index)}
      >
        {t.text}
        </span>
        <button onClick={() => deletetask(index)}>Delete</button>
    </li>
    ))}
  </ul>
    </div>
  );
}


export default App;


