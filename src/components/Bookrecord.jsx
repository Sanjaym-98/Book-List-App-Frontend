import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const Bookrecord=()=>{
    const [Data,setData]=useState([]);
    const navigate =useNavigate();
    const token =JSON.parse(localStorage.getItem("token"))
    const location = useLocation();

    useEffect(()=>{
        getvalue()
    },[location.state.bookId])

    const getvalue=()=>{
        axios.get(`http://localhost:5000/api/v1/book/${location.state.bookId}`,{
            headers:{
                "Authorization":token
            }
        }).then((result)=>{
            setData([result.data.data[0]]);
        }).catch((e)=>{
            console.log(e.message)
        })
    }

    const handleclick=()=>{
        const id =location.state.bookId
        navigate('/editbook', { state: { bookId: id } })
    }

    const handledelete=()=>{
        axios.delete(`http://localhost:5000/api/v1/book/${location.state.bookId}`,{
            headers:{
                "Authorization":token
            } 
        }).then((result)=>{
            console.log(result)
            navigate("/homepage")
        }).catch(e=>console.log(e.message))
    }

    return(
        <div className="bookrecord">
            <div className="header">
                <Link to="/homepage" ><button>Show Book List</button></Link> 
            </div>
            <div className="content">
                <h1>Book's Record</h1>
                <h6>View Book's info</h6>
                {Data.length > 0 && (
                    <ol>
                        <li>
                            Title--- {Data[0].title}
                        </li>
                        <li>
                            Author--- {Data[0].author}
                        </li>
                        <li>
                            ISBN--- {Data[0].isbn}
                        </li>
                        <li>
                            Publisher--- {Data[0].publisher}
                        </li>
                        <li>
                            Created At--- {Data[0].createdAt}
                        </li>
                        <li>
                            Description--- {Data[0].description}
                        </li>
                    </ol>
                )}
            </div>
            <div className="buttons">
                <button onClick={handledelete}>Delete Book</button>
                <button onClick={handleclick}>Edit Book</button>
            </div>
        </div>  
    )
}

export default Bookrecord