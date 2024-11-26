import axios from 'axios';
import React, { useEffect, useState } from 'react'

const TaskPage = () => {

    const [myTasks,setMyTasks] = useState({})

    const [newTaskName,setNewTaskName] = useState("");
    const [newTaskStatus,setNewTaskStatus] = useState("");

    const addMyTask = async () => {
        const email = localStorage.getItem('email');
        await axios.post('/addMyTask',{
            email,
            newTaskName,
            newTaskStatus
        }).then((res)=>{
            console.log(res)
            getMyTasks();
        })
    }


    const getMyTasks = async () =>{
        const email = localStorage.getItem('email');
        axios.post('/getMyTasks',{
            email
        }).then((res)=>{
            setMyTasks(res.data);
        }).catch(()=>{
            alert("something went wrong");
        })
    }

    useEffect(()=>{
        getMyTasks()
    },[])

  return (
    <div className='flex w-[100%] flex-wrap min-h-screen h-full p-4 justify-center '>
        <div  className='bg-white mb-4 p-4 flex flex-col rounded-lg w-[80%] h-full gap-2' >
            <div className='flex flex-col gap-2'>
                <label className=''>Add Your Task Name</label>
                <input onChange={(e)=>setNewTaskName(e.target.value)} className='border-2 rounded-md p-2' title='Your Task'/>
            </div>
            <div className='flex flex-col gap-2'>
                <label className=''>Status (either completed or todo)</label>
                <input onChange={(e)=>setNewTaskStatus(e.target.value)} className='border-2 text-black rounded-md p-2' title='Your status (either completed or todo)'/>
            </div>
            <div onClick={addMyTask} className='gap-2 bg-blue-600 cursor-pointer text-white rounded-md p-2 text-center'>
                Add Task
            </div>
        </div>
        {myTasks.map((task)=>{
            return(
                <div className='w-[100vw] flex p-4 h-full'>
            <div className='bg-white mb-4 p-4 flex flex-col rounded-lg w-[30%] h-[20%] gap-4'>
                <div className='border-b-2 text-xl font-mono'>{task.taskName}</div>
                <div className=''>{task.taskStatus}</div>
            </div>
            </div>
            )
        })
        }
    </div>  
  )
}

export default TaskPage