import '../css/Card.css'
import { useState } from 'react';
import '../css/Popup.css'
function Card(){
    const[popup,setPopup]=useState(false);
    const togglePopup=()=>{
        setPopup(!popup)
    }
    if(popup){
        document.body.classList.add('active-popup');
    }else{
        document.body.classList.remove('active-popup');
    }
    return(
        <div className="card-main">
            <div className="card-cnt" onClick={togglePopup}>
                <div className="card-cnt-left">
                    <h4>Server Addition!</h4>
                </div>
                <div className="card-cnt-right">
                    <h5>15</h5>
                </div>
            </div> 
            {popup &&(
                <div className="popup">
                    <div onClick={togglePopup} className="overlay"></div>
                    <div className="popup-content">
                        <h2>Hello Popup</h2>
                        <p>lorem20 </p>
                        <button className="close-popup" onClick={togglePopup}>X</button>
                    </div>

                </div>
            )}
        </div>
    ); 
}
export default Card