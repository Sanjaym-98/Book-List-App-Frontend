import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import "./Addbook.css"
const Addbook=()=>{
    const [Data,setData]=useState({title:"",isbn:"",author:"",description:"",publish:"",publisher:""})
    const token = JSON.parse(localStorage.getItem("token"))
    const navigate =useNavigate()
    const handlesubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:5000/api/v1/book",Data,{
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
             <Link to="/homepage"><button>Show Book List</button></Link>   
            </div>
            <div>
                <h1>Add Book</h1>
                <h3>Create New Book</h3>
            </div>
            <form onSubmit={handlesubmit}>
                <div>
                    <input type="text" placeholder="Title of the Book..." value={Data.title} onChange={(e)=>setData({...Data,title:e.target.value})}   />
                </div>
                <div>
                    <input type="text" placeholder="ISBN" value={Data.isbn} onChange={(e)=>setData({...Data,isbn:e.target.value})}  />
                </div>
                <div>
                    <input type="text" placeholder="Author"  value={Data.author}  onChange={(e)=>setData({...Data,author:e.target.value})} />
                </div>
                <div>
                    <input type="text" placeholder="Describe the Book" value={Data.description}  onChange={(e)=>setData({...Data,description:e.target.value})} />
                </div>
                <div>
                    <input type="text" placeholder="Published Date"  value={Data.publish}  onChange={(e)=>setData({...Data,publish:e.target.value})} />
                </div>
                <div>
                    <input type="text" placeholder="Publisher of the Book" value={Data.publisher}  onChange={(e)=>setData({...Data,publisher:e.target.value})} />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Addbook