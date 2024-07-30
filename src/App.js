import { useState,useEffect } from "react";

import one from "./images/one.jpg";
import two from "./images/two.jpg";
import three from "./images/three.jpg";
import four from "./images/four.jpg";
import five from "./images/five.jpg";
import six from "./images/six.jpg";
import seven from "./images/seven.jpg";
import eight from "./images/eight.jpg";

const images = [one,two,three,four,five,six,seven,eight];

function App() {
    const [bgImage, setBgImage] = useState(images[0]);
    const [count, setCount] = useState(1);

    useEffect(() => {
      console.log('Screen Refreshed and Background changed');
      check();
      
      document.body.style.backgroundImage = `url(${bgImage})`;
    }, [bgImage, count]); 
  
    const changeBackground = () => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setBgImage(images[randomIndex]);
    };

    function update(){
      setCount((previousState)=>{return previousState+1})
    }
   
    function check(){
      if(count>15){
        setCount(1);
      }
    }
    
  
    return (
      <div>
        <button style={{
          backgroundColor: 'green',
          borderWidth: '3px', 
          borderStyle: 'double', 
          borderColor: 'white',
          borderRadius: '20px',
          fontWeight: 'bold',
          marginLeft: '900px',
          marginTop: '10px'
          }} 
          onClick={()=>{ changeBackground(); update(); }}>Change Background {count}</button>
      </div>
    );
  }
  
  export default App;