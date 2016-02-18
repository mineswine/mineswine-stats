import React from "react";
import * as S from "string";
import ProfileAvatar from "./profileavatar";
import Stats from "./stats";
class ProfileContainer extends React.Component{
  constructor(params){
    super(params);
    this.props.uuid = params.uuid;
    this.props.username = params.username;
  }
  render(){
    return <div className="profileContainer">
        <ProfileAvatar uuid={this.props.uuid} username={this.props.username} className="large"/>
        <div className="largeStats">
            <Stats uuid={this.props.uuid} />
        </div>
    </div>
  }
}

export default ProfileContainer;
