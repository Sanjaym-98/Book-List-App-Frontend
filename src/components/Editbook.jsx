import { Link, useLocation } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Editbook=()=>{
    const [Data,setData]= useState({title:"",isbn:"",author:"",description:"",publish:"",publisher:""})
    const navigate =useNavigate();
    const location = useLocation();
    const token = JSON.parse(localStorage.getItem('token'))
    const id =location.state.bookId;
    console.log(id)
    const handlesubmit=(e)=>{
        e.preventDefault()
        axios.put(`https://book-list-backend-7gjb.onrender.com/api/v1/book/${id}`,Data,{
            headers:{
                "Authorization":token
            }
        }).then((result)=>{
            console.log(result)
            navigate('/homepage')
        }).catch((e)=>{
            console.log(e.message)
        })
    }
    
    return (
        <div>
            <div>
            <Link to="/homepage" ><button>Show Book List</button></Link> 
            </div>
            <div>
                <h1>Edit Book</h1>
                <h5>Update Book's Info</h5>
            </div>
            <form onSubmit={handlesubmit}> 
                <div>
                    Title 
                    <input type="text" value={Data.title} onChange={(e)=>setData({...Data,title:e.target.value})}    />
                </div>
                <div>
                    ISBN 
                    <input type="text" value={Data.isbn}  onChange={(e)=>setData({...Data,isbn:e.target.value})}/>
                </div>
                <div>
                    Author 
                    <input type="text" value={Data.author}  onChange={(e)=>setData({...Data,author:e.target.value})}/>
                </div>
                <div>
                    Description 
                    <input type="text" value={Data.description} onChange={(e)=>setData({...Data,description:e.target.value})}/>
                </div>
                <div>
                    Published Date 
                    <input type="text" value={Data.publish} onChange={(e)=>setData({...Data,publish:e.target.value})}/>
                </div>
                <div>
                    Publisher 
                    <input type="text" value={Data.publisher} onChange={(e)=>setData({...Data,publisher:e.target.value})}/>
                </div>
                <div>
                    <button>Update Book</button>
                </div>
            </form>
        </div>
    )
}

export default Editbook;