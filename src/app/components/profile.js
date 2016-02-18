import React from "react";
import MSTable from "./mstable";
import ProfileContainer from "./profileContainer";
class Profile extends React.Component{
    constructor(params){
      super(params)
      this.state = {
        username: "--"
      }
    }
    componentDidMount(){
      $.ajax({
        url:`https://us.mc-api.net/v3/name/${this.props.params.uuid}`,
        sucess: res =>{
          this.setState(state => state.username=JSON.parse(res).name);
        }
      });
    }
    recentmatches(index,callback){
      this.standardcallback('recentmatches',index,callback);
    }
    weaponstats(index,callback){
      this.standardcallback('weaponstats',index,callback);
    }
    standardcallback(url,index,callback){
      $.ajax({
        url:`/${url}/${this.props.params.uuid}/${index+1}`,
        success:(result) => {callback(JSON.parse(result))}});
    }
    render(){
        return <div className="profile">
            <ProfileContainer poop={this.props.params.uuid} username={this.state.username}/>
            <MSTable className="recentmatches" getMethod={this.recentmatches}/>
            <MSTable className="weaponstats" getMethod={this.weaponstats}/>
        </div>
    }
}

export default Profile;
