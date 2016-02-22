import React from "react";
import * as S from "string";
import ProfileAvatar from "./profileavatar";
import Stats from "./stats";
class ProfileContainer extends React.Component{
  render(){
    console.log(this.props);
    return <div className="profileContainer">
        <ProfileAvatar user={this.props.user} username={this.props.username} large={true}/>
        <div className="largeStats">
            <Stats user={this.props.user}/>
        </div>
    </div>
  }
}

export default ProfileContainer;
