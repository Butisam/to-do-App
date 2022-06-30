import React from 'react'
import './Displaytask.css'

const Displaytask = (props) => {
  return (
    <div>
       {props.list.map((task,id)=>{
        if(task._tasktype==="High")
        {
            return(
                <div key={id} className="highLine">
                    <div className="taskName"><p>{task._tasks}</p></div>
                    <div className="taskDate"><p>{task._date}</p></div>
                    <div className="high-line"></div>
                </div>
                ) 
        }
        else if(task._tasktype==="Medium")
        {
            return(
                <div key={id} className="MediumLine">
                    <div className="taskName"><p>{task._tasks}</p></div>
                    <div className="taskDate"><p>{task._date}</p></div>
                    <div className="medium-line"></div>
                </div>
                )
            }
            else if(task._tasktype==="Low")
            {
                return(
                    <div key={id} className="LowLine">
                    <div className="taskName"><p>{task._tasks}</p></div>
                    <div className="taskDate"><p>{task._date}</p></div>
                    <div className="low-line"></div>
                    </div>
                    )
                }
       })}
        </div>
  )
}

export default Displaytask