import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Profile = () => { 

    const [userInfo,setUserInfo] = useState({})

    const navigate = useNavigate();

    const getData = async () => {
        if(!localStorage.getItem('email')){
            alert("You are not login");
            navigate('/register');
        }
        const email = localStorage.getItem('email');
        await axios.post('/profileInfo',{
            email
        }).then((res)=>{
            setUserInfo(res.data)
            console.log(res)
            console.log("data retrieved")
        }).catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        getData();
    },[]);

  return (
    <div className='flex w-[100%] h-screen p-4 justify-center items-center'>
        <div className='bg-white flex flex-col justify-center items-center gap-x-12 p-4 rounded-md'>
            <div className='w-[40%] h-[40%]'>
                <img src='https://cdn.pixabay.com/photo/2021/11/12/03/04/woman-6787784_1280.png' />
            </div>
            <div className='bg-white flex gap-x-12 p-4 rounded-md'>
                <div className=' border-blue border-2 p-2 rounded-md'>UserName : {userInfo?.username}</div>
                <div className=' border-blue border-2 p-2 rounded-md'>Email : {userInfo?.email}</div>
            </div>

            <div className='bg-blue-600 text-white cursor-pointer flex gap-x-12 p-4 rounded-md'>
                <div onClick={()=>navigate('/task')}>Go To My Task Management</div>
            </div>
        </div>
    </div>
  )
}

export default Profile