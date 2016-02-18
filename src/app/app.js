import React from 'react/addons';
// import GriddleTest from "./components/griddletest";
// import {Router,Route,hashHistory} from "react-router";
// import Profile from "./components/profile"
// import routes from "./routes"
// import Cart from './components/root';

/*
 * @class App
 */
class App extends React.Component {
  render(){
   return <div>
     <p>{"I'm a paragraph!"}</p>
      {this.props.children}
    </div>
      // <Link to="/stats/"
  }
}

export default App;
