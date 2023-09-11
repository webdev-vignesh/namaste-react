import React from "react"

class UserClass extends React.Component {

    constructor(props){
        super(props);
        
        this.state = {
            userInfo: {
                name: "Bala",
                location: "Goa"
            }
        }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/webdev-vignesh");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });
        console.log("Component did mount");
    }

    componentDidUpdate() {
        console.log("Component did update");
    }

    componentWillUnmount() {
        console.log("Component will unmount");
    }

    render() {

        const { name, location, twitter_username, followers, avatar_url } = this.state.userInfo;
        return(
            <div className="user-card">
                <img src={avatar_url} alt="profile photo" />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Twitter: {twitter_username}</h4>
                <h4>Followers: {followers}</h4>
            </div>
        ) 
    }
}

export default UserClass;