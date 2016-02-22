import React from "react";
import Stats from "./stats";
import {Link} from "react-router";
class ProfileAvatar extends React.Component {
    constructor(props){
      super(props);
      this.user = props.user;
      this.username = props.username;
      console.log(props);
      this.large = props.large;
      this.state = {
        renderside: false
      }
      this.mouseEnter = this.mouseEnter.bind(this);
      this.mouseLeave = this.mouseLeave.bind(this);
    }
    mouseEnter(event){
      if (!this.large){
        this.setState( state => state.renderside = true);
      }
    }
    mouseLeave(event){
      if (!this.large){
        this.setState( state => state.renderside = false);
      }
    }
    render(){
      return <Link to={`/stats/${this.user}`} className={this.large ? "large" : "small"} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} >
        <img src={`http://cravatar.eu/avatar/${this.user}/${this.large ? 100 : 50}`} />
        <span className="name">{this.username}</span>
        <div className="smallstats">
          {this.state.renderside ? <Stats user={this.user} /> : null}
        </div>
      </Link>
    }
}

export default ProfileAvatar;
