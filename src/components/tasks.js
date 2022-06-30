import React,{useState} from "react";
import './tasks.css'
function Addtask(props){


  const [task, settask] = useState("");
  const [taskType, settaskType] = useState("");
  const [date, setdate] = useState("");
  
  const add = (()=>{
  props.add( task, date,taskType);

  })


  return(
  <div>
    
    <h1 style={{paddingTop:"5px"}}>TODO-TASKS</h1>
    <input placeholder="Enter task" onChange = {(e)=> settask(e.target.value)} /><br></br>
    <input placeholder="Date" onChange = {(e)=> setdate(e.target.value)}/>{" "}<br></br>
    <select onChange = {(e)=> settaskType(e.target.value)}  >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
    </select><br></br><br></br>
    <button className="bttn" id="btn" onClick={add}>ADD TASK</button>
  </div>
  
  )
  
  }

  export default Addtask