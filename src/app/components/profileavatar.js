import React from "react";
import Stats from "./stats";

class ProfileAvatar extends React.Component {
    constructor(props){
      super(props);
      this.props.uuid = props.uuid;
      this.props.username = props.username;
      this.props.large = props.large;
      this.state = {
        renderside: false
      }
    }
    mouseEnter(event){
      if (!this.props.large){
        this.setState( state => state.renderside = true);
      }
    }
    mouseLeave(event){
      if (!this.props.large){
        this.setState( state => state.renderside = false);
      }
    }
    render(){
      return <Link to={`/stats/${uuid}`} className={this.props.large ? "large" : "small"} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} >
        <img src={`cravatar.eu/avatar/${this.props.uuid}/${this.props.large ? 100 : 50}`} />
        <span className="name">{this.props.username}</span>
        <div className="smallstats" disabled={this.state.renderside}>
          <Stats uuid={this.props.uuid} />
        </div>
      </Link>
    }
}

export default ProfileAvatar;
