import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

  const LoginPage=()=>{
    const navigate=useNavigate();
    const handlelogin=()=>{
        localStorage.setItem("login","Dark");
        navigate('/')
    };
     useEffect(()=>{
        const loginId=localStorage.getItem("login");
        if(loginId){
        navigate("/");
        }
    },[]);
    return(
        <>
       <h1>Fill your Credentials</h1> 
       <label>Name</label>
       <input type="text" placeholder="enter your id"/>
       <br/>
       <br/>
       <label>pass</label>
       <input type="text" placeholder="enter your pass"/>
       <br/>
       <button onClick={handlelogin}>login</button>
        
        </>
    )

}
export default LoginPage;
