import './login.css';
import { useHistory } from 'react-router-dom';


function Login(){

    const btn ={
        width: '150px',
        height: '30px' ,
        marginTop:'3%'
    }
    const sighup ={
        width: '150px',
        height: '30px' ,
        marginTop:'6%'
    }
    let history  = useHistory();
    const Login = (()=>{
        history.push("/home") ;
    })
    const Signup = (()=>{
        history.push("/Signup")
    })
    return(
    <div className="container">

        <h1>LOGING</h1>
            <input type="email" placeholder="enter your email" /><br></br> 
            <input type="password" placeholder="enter password" /><br></br>
            <button style={btn} onClick={Login}>Login </button>
            <button style={sighup} onClick={Signup}>SignUp</button>
           

        </div>
    );

        
    
}

export default Login