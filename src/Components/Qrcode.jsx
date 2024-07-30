import { useState} from "react";
import './Qrcode.css'; // Add this to import .css file
import Header from "./Header";
import Footer from "./Footer";
import App from '../App'; // import from src so put ../
import Viewform from "./Viewform";


export const Qrcode=() =>{
    const[img,setImg]=useState("");
    const[loading,setLoading]=useState(false);
    const[qrData,setQrData]=useState("");
    const[qrSize,setQrSize]=useState("");

    const[project,setProject]=useState("");

    async function generateQr() {
        setLoading(true);
        try {
            const url='https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}';
            setImg(url); 
        } catch (error) { 
            console.error("Error generating QR code", error)
        }
            finally {
                setLoading(false);
            }

    }

    function downloadQr(){
        fetch(img)
        .then((response) => response.blob())
        .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download="qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        });
    }

    return(
        <center> 
            <Header/> <App/>
            <Viewform/>
        <div className="app-container" > 

        <h1> {project} </h1>
        
        {loading && <p>Please wait...</p>}
        {img && <img src={img} className="img"/>}
        <div>
            <label htmlFor="dataInput" className="input-label">
                Data URL For QR Code:
            </label>
            <input type="text" value={qrData} id="dataInput" placeholder="Enter the URL for Qr Code" onChange={(e) => setQrData(e.target.value)}/> <br></br>
            <label htmlFor="sizeInput" className="input-label">
                Image Size (eg., 150):
            </label>
            <input type="text" value={qrSize} id="sizeInput" placeholder="Enter the image size" onChange={(e)=> setQrSize(e.target.value)} /> <br></br>

            <button style={{color:"white",backgroundColor:"red"}}
            onClick={()=>{setProject("QR CODE GENERATOR")}}>Click to view project name</button>
            <br></br> <br></br>

            <button className="generate-button" disabled={loading} onClick={generateQr} >Generate QR Code</button> 
            <button className="download-button" onClick={downloadQr}>Download QR code</button> <br></br>
        </div>
        <p className="footer"> Designed by <a href="https://gurutechcorp.com/"> GuruTech </a></p>
      </div>

      <div> <Footer/></div>
       </center>
    
        );
        }