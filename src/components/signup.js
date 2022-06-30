import { useHistory } from 'react-router-dom';
import './signup.css'
function Signup(){



   
     let history  = useHistory();
    
    const Login = (()=>{
        history.push("/home") ;
    })
    return(
        <div className='cover'>

       
    <div className='main'>

<input type="checkbox" id="chk" aria-hidden="true"></input>

<div class="signup">
    <form>
        <label for="chk" aria-hidden="true">Sign up</label>
        <input className='input2'type="text" name="txt" placeholder="User name" required=""></input>
        <input className='input2'type="email" name="email" placeholder="Email" required=""></input>
        <input className='input2' type="password" name="pswd" placeholder="Password" required=""></input>
        <button className='button2'>Sign up</button>
    </form>
</div>

<div class="login">
    
    <form>
        <label for="chk" aria-hidden="true">Login</label>
        <input className='input2' type="email" name="email" placeholder="Email" required=""></input>
        <input className='input2' type="password" name="pswd" placeholder="Password" required=""></input>
        <button className='button2' onClick={Login}>Login </button>
    </form>
</div>
      
        </div>
        </div>
    );

}

export default Signup;