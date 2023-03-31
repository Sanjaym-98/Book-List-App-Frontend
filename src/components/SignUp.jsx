import { useState } from "react"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import "./SignUp.css"
const SignUp =()=>{
    const [data,setdata]=useState({email:"",password:"",confirmpassword:""});
    const navigate =useNavigate()
    const handlesubmit=async(e)=>{
        e.preventDefault();
        if(data.password.length<6){
            alert("password length should be min of 6")
        }else if(data.password !== data.confirmpassword){
            alert("password and confirmpassword is not same")
        }else {
            axios.post("https://book-list-backend-7gjb.onrender.com/api/v1/register",data)
            .then((result)=>{
                console.log(data)
                console.log(result)
                setdata({email:"",password:"",confirmpassword:""});
             navigate('/')
            }).catch((e)=>{
                console.log(e.message)
            })

            
        }
    }
    return (
        <div id="main">
            <div id="signupcontainer">
            <div>
                <h1>
                    Register
                </h1>
            </div>
            <form onSubmit={handlesubmit}>
                <div>
                <input type="email" placeholder="Username" value={data.email} onChange={(e)=>setdata({...data,email:e.target.value})} />   
                </div>
                <div>
                <input type="password" placeholder="Password" value={data.password} onChange={(e)=>setdata({...data,password:e.target.value})} />   
                </div>
                <div>
                <input type="password" placeholder="Confirm Password" value={data.confirmpassword} onChange={(e)=>setdata({...data,confirmpassword:e.target.value})} />   
                </div>
                <div>
                    <button>REGISTER</button>
                 
                </div>
            </form>
            </div>
        </div>

    )
}

export default SignUp