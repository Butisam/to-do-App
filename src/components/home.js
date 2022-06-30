import Addtask from "./tasks";
import { useState } from "react"
import Displaytask from './Displaytask'

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    

function Home() {
  
    const [tasks, Settasknew] =useState([]);
    const Addtasks = ((task, date, tasktype)=>{
      Settasknew((tasks)=>[...tasks,{
        _tasks:task,
        _tasktype:tasktype,
        _date:date
      }])
      console.log(tasks)
    })
    return (
    
    <div>

    <div className="display_container">
      <div className="to-do"> TASKS</div>
    <div>
    <Addtask add={Addtasks}/> 
    </div>
    <div className="tasks">
    <Displaytask list={tasks}/>
    </div>
    </div>
  </div> 
       

      
    );
  }

export default Home;