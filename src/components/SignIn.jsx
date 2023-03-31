import { useState } from "react"
import axios from 'axios';
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import "./SignIn.css"
const SignIn=()=>{
    const [data,setdata]=useState({email:"",password:""});
    const navigate= useNavigate()
    const handlesubmit=async(e)=>{
        e.preventDefault()
        if(data.password.length>5){
            axios.post("http://localhost:5000/api/v1/login",data)
            .then((result)=>{
                console.log(result);
                localStorage.setItem("token", JSON.stringify(result.data.message.token));
                localStorage.setItem("userdetails",JSON.stringify(result.data.message.userdetails));
                setdata({email:"",password:""})
                navigate('/homepage')
            }).catch((e)=>{
                console.log(e.message)
            })
        }
    }
    return(
        <div id="main">
            <div id="signincontainer">
            <div id="icon">
            <span class="material-icons">person</span>
            </div>
            <div>
                <h1>Member Login</h1>
            </div>
            <form onSubmit={handlesubmit}>
            <div id="input">
                <input type="email" placeholder="Username" value={data.email} onChange={(e)=>setdata({...data,email:e.target.value})} />
            </div>
            <div  id="input">
                <input type="password" placeholder="Password" value={data.password} onChange={(e)=>setdata({...data,password:e.target.value})} />
            </div>
            <div>
                <button id="btn">LOGIN</button>
                <Link to="/SignUp" ><button id="btn">SIGNUP</button></Link>
            </div>            
            </form>
            <h6>Forgot Password ?</h6>
            </div>
        </div>
    )
}

export default SignIn;