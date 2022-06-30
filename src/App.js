
import completed from './components/complete'
import {Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './components/home'
import Signup from './components/signup'
function App() {
  
  return (
  <Switch>

  <Route exact path="/" component={Signup}></Route> 
  <Route path="/home" component={Home}></Route> 
  <Route path="/completed" component={completed}></Route>
  </Switch>
  );
}

export default App;
