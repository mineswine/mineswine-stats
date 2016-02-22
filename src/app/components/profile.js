import React from "react";
import MSTable from "./mstable";
import ProfileContainer from "./profileContainer";
// var $ = require("jQuery");
class Profile extends React.Component{
    constructor(params){
      super(params)
      this.state = {
        username: "--"
      }
      this.recentmatches = this.recentmatches.bind(this);
      this.weaponstats = this.weaponstats.bind(this);
      this.standardcallback = this.standardcallback.bind(this);
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
      let ind = index + 1;
      if(typeof variable_here === 'undefined'){
        return;
      };
      $.ajax({
        url:`/${url}/${this.props.params.uuid}/${ind}`,
        success:(result) => {callback(JSON.parse(result))}});
    }
    render(){
        return <div className="profile">
            <ProfileContainer user={this.props.params.uuid} username={this.state.username}/>
            <MSTable className="recentmatches" getMethod={this.recentmatches}/>
            <MSTable className="weaponstats" getMethod={this.weaponstats}/>
        </div>
    }
}

export default Profile;
