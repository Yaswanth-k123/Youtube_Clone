import React, { useEffect, useState } from 'react'
import "./New.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function New(props) {
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
            console.log("gaming")
            setData(response.data);
            console.log(data);
            const titles = response.data.items.map(item => item.snippet.title);
            props.setTitle(titles);
          } catch (error) {
            console.error('Error fetching data: ', error); // Log the error here
          }
        };
      
        fetchData();
      }, [props.videos]);
    return (
        <div className='container'>
            <div className='inner-container'>
                <iframe
                    width="800"
                    height="500"
                    src={props.videos}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
           

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
            )
}
            export default New;
