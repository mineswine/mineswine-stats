import React from "react";
import MSTable from ".";
class Profile extends React.Component{
   static const RECENTMATCHES_SIZE = 25, WEAPONSTATS_SIZE = 25;
   constructor(params){
    this.props = {user:params.user};
   }
    recentmatches(index,callback){
      this.standardcallback('recentmatches',index,callback);
    }
    weaponstats(index,callback){
      this.standardcallback('weaponstats',index,callback);
    }
    standardcallback(url,index,callback){
      $.ajax({url:`/${url}/user=${this.props.user}&page=${index+1}`,success:(result) => {callback(JSON.parse(result))}});
    }

    render(){
        return <div className="profile">
            <ProfileContainer />
            <MSTable className="recentmatches" getMethod={this.recentmatches}/>
            <MSTable className="weaponstats" getMethod={this.weaponstats}/>
        </div>
    }
}

export default Profile;
