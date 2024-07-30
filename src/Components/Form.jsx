import { useState } from "react";

function Form(){

    const [input,setInput]=useState({});

    function handleSubmit(e){
        e.preventDefault();
        console.log("Form Submitted");
        console.log("Current State",input);
    }

    return<div className="form"><form onSubmit={handleSubmit} >
        <h1 style={{fontSize:'20px'}}>COURSE REGISTRATION FORM</h1>
        <label>Enter your Name <input type="text" placeholder="(Eg: Varun T)" onChange={(e)=>{setInput((oldState)=>{return{...oldState,name:e.target.value}})}}/></label>
        <label>Enter your Age <input type="number" placeholder="(Eg: 23)" onChange={(e)=>{setInput((oldState)=>{return{...oldState,age:e.target.value}})}}/></label>
        <label>Enter your Email <input type="email" placeholder="(Eg: varun@gmail.com)" onChange={(e)=>{setInput((oldState)=>{return{...oldState,email:e.target.value}})}} /></label>
        <label>Enter your Qualification <input type="text" placeholder="(Eg: BE Computer Science" onChange={(e)=>{setInput((oldState)=>{return{...oldState,qualification:e.target.value}})}}></input></label>
        <label>Enter your Current Designation (or) NA <input type="text" placeholder="(Eg: Software Developer)" onChange={(e)=>{setInput((oldState)=>{return{...oldState,designation:e.target.value}})}}></input></label>
        <label>Enter your Contact Number <input type="number" placeholder="(Eg:9474839338)" onChange={(e)=>{setInput((oldState)=>{return{...oldState,contact:e.target.value}})}}></input></label>
        <label>Course you want <input type="text" placeholder="(Eg: Java,Python)" onChange={(e)=>{setInput((oldState)=>{return{...oldState,course:e.target.value}})}}></input></label> <br></br>
        <button style={{color:"white",backgroundColor:"red"}}>SUBMIT</button>
        </form></div>
}
export default Form;