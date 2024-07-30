import { useState } from "react";
function Header(){
    const[color,changeColor]=useState();
    return(
        <>
        <div className="header">
            <h1 style={{color}}>Welcome to Qr code Generator and Downloader</h1>
            <button style={{color: "black", backgroundColor: color}} 
            onClick={()=>changeColor("red")}><b>Change to red color</b></button> 
        </div>
        </>  
    );
}
export default Header;