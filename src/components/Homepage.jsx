import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Homepage.css";

const Homepage = () => {
  const [Data, setData] = useState([]);
  const token = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();

  useEffect(() => {
    handleget();
  }, []);

  const handleget = () => {
    axios
      .get("http://localhost:5000/api/v1/book", {
        headers: {
          Authorization: token,
        },
      })
      .then((result) => {
        console.log(result);
        console.log(result.data.message);
        setData(result.data.message);
        console.log(Data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  const handleclick = (id) => {
    console.log(id);
    navigate("/bookrecord", { state: { bookId: id } });
  };

  return (
    <div className="homepage">
      <h1>Book List</h1>
      <div className="add-button">
        <Link to="/addbook">
          <button>
            <span class="material-icons">add</span>Add New Book
          </button>
        </Link>
      </div>
      <div className="book-list">
        {Data.map((val, i) => {
          return (
            <div className="book-item" key={val._id} onClick={() => handleclick(val._id)}>
              <img
                src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71iWsiqUwJL.jpg"
                alt="cover"
                height={"200px"}
                width={"150px"}
              />
              <h2>{val.title}</h2>
              <h2>{val.publisher}</h2>
              <h2>{val.description}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Homepage;
