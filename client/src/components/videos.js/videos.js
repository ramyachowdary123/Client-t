import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../Header/header"
import Cookies from "js-cookie";
import './videos.css';


const Videos=()=>{
    let navigate = useNavigate();


    const token = Cookies.get("jwt-token")
    useEffect(()=>{
        if(token === undefined){
            navigate("/auth")
        }
    })
    return(
        <>
        <Header/>
        <div className="video-profile-container">
        
        </div>

        </>
    )
}

export default Videos;