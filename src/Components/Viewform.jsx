import React, { useState } from 'react';
import Form from "./Form";

const Viewform = () => {
  const [showForm, setShowForm] = useState(false);

  const handleAnchorClick = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
  };

  return (
    <div><p style={{color:'rgb(78, 7, 129)',backgroundColor:'white',fontFamily:'monospace',fontSize:'20px',fontWeight:'bold'}}>To join in Guru Tech! for courses 
        <a href="#" onClick={handleAnchorClick} style={{fontFamily:'monospace',fontSize:'20px',color:'green',fontWeight:'bolder'}}> register here
  </a> </p>
      
      {showForm && <Form/>}
    </div>
  );
};

export default Viewform;