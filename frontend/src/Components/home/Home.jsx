import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "../sidebar/Sidebar";
import New from "../new/New";
import axios from "axios";
import "./Home.css"
import { useNavigate } from "react-router-dom";


function Home(props) {
  const navigate=useNavigate();
  const [data, setData] = useState([]);
  const handleClick = (vid) => {
    props.setVideos(vid)
    navigate("/new");
  }
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await axios.get(props.fetchurl);
        setData(response.data);
        const titles = response.data.items.map(item => item.snippet.title);
        props.setTitle(titles);
      } catch (error) {
        console.error('Error fetching data: ', error); // Log the error here
      }
    };
  
    fetchData();
  }, [props.category]);
  

  return (
    <div>
      
      <div className="parent">
        <div className="children">
        {data && data.items && data.items.map((item, index) => (
          <div key={index} className="outer">
          
            <div className='container'>
              <div >
                <div className='card' onClick={(e) => handleClick(`https://www.youtube.com/embed/${item.id.videoId}`)}>
                  <img src={item.snippet.thumbnails.medium.url} width="250px" height="250px" />
                  <div>
                    <p>{item.snippet.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
