import { useNavigate,Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "../Header/header";
import Cookies from "js-cookie";

import './home.css';

const Home = ()=>{
    let navigate=useNavigate();

    const token=Cookies.get('jwt-token');
    
    useEffect(()=>{
        if(token === undefined){
            navigate("/");
        }
    })
  

    const goToVideos = ()=>{
        navigate('/videos')
     }

     
    return(
        <>
        <Header/>
        <div className="home-container">
            <div className="responsive-container">
                <imsg src="./C:/Pictures\PFX Watch Black.png/"/>
                <h1 className="main-heading">Find the videos you want</h1>
                <p className="video-desc">Buy PFX WATCH Premium.</p>
                <button className="find-videos" onClick={goToVideos}>Get It Now</button>
            
            </div>
        </div>
        </>
    )
}
export default Home;
