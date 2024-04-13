import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Routes,Route } from "react-router-dom"
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Shorts from './Components/Shorts';
import New from './Components/New';
import Gaming from './Components/Gaming';
import Movies from './Components/Movies';
import Music from './Components/Music';
import { useState } from 'react';

const Api="AIzaSyC8c4_9_NnNDYLr8llarJbqt6WY3ZDXZzM";
const api="AIzaSyDMmK_cU7hM57veJAKNeMIHv1WXFjpX6mU";
const api1="AIzaSyDNEsB_iF_oVfSDHdIqGqH-frmGPJUoSjA";
const channelId="UC-CSyyi47VX1lD9zyeABW3w";

function App() {
  const [category,setCategory]=useState('all');
  const [videos,setVideos]=useState('');
  const [title,setTitle]=useState([]);
  var fetchurl=`https://www.googleapis.com/youtube/v3/search?key=${api1}&&q=${category}&part=snippet,id&maxResults=20`
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar setCategory={setCategory} />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home videos={videos} setVideos={setVideos} title={title} setTitle={setTitle} category={category} setCategory={setCategory} fetchurl={fetchurl} />} /> 
        <Route path="/shorts" element={<Shorts />} /> 
        <Route path="/new" element={<New  videos={videos} setVideos={setVideos} fetchurl={fetchurl}/>} /> 
        <Route path="/gaming" element={<Gaming  videos={videos} setVideos={setVideos} setCategory={setCategory} fetchurl={fetchurl} />} /> 
        <Route path="/movies" element={<Movies  videos={videos} setVideos={setVideos} setCategory={setCategory} fetchurl={fetchurl} />} /> 
        <Route path="/music" element={<Music  videos={videos} setVideos={setVideos} setCategory={setCategory} fetchurl={fetchurl} />} /> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
