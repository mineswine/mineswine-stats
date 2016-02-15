import React from "react";

class Profile extends React.Component{
    
    render(){
        return <div className={"profile"}>
            <ProfileContainer />
            <RecentMatches />
            <WeaponStats />
        </div>
    }
}

export default Profile;