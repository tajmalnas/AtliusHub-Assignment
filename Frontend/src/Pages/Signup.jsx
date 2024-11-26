import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const [userName,setUserName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate();

    const submitFormData = (e) =>{
        e.preventDefault();
        if(userName.length<=3){
            alert("username lenght should be greater than 3")
        }
        if(!email.includes("@gmail.com")){
            alert("email is invalid")
        }
        if(password.length<8){
            alert("passwrod is too small, it should be minimum of 8 characters")
        }
        axios.post('/auth/register',{
            userName,
            email,
            password
        }).then(()=>{
            alert("you have successfully registered");
            navigate('/login')
        })
    }

  return (
    <div className='w-[100vh] flex h-screen justify-center items-center'>
        <form className='p-4 w-[50%] border rounded-md'>
            <div className='flex flex-col gap-y-2'>
                <label className='w-max'>UserName</label>
                <input onChange={(e)=>setUserName(e.target.value)} className='border' title='Enter Your name '></input>
            </div>
            <div className='flex flex-col'>
                <label className='w-max'>Email</label>
                <input className='border' onChange={(e)=>setEmail(e.target.value)} title='Enter Your Email '></input>
            </div>
            <div className='flex flex-col'>
                <label className='w-max'>Password</label>
                <input className='border' onChange={(e)=>setPassword(e.target.value)} title='Enter Your password '></input>
            </div>
            <div className='flex p-2'>
                <button  className='bg-blue-500 w-[100%] h-8 text-center border rounded-md  text-white' 
                onClick={submitFormData}>Register</button>
            </div>
            <p>Already Have an account </p>
            <p onClick={()=>navigate('/login')} className='text-blue-500 cursor-pointer'>Click Here</p>
        </form>
    </div>
  )
}

export default Signup