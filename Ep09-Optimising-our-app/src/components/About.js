import React from 'react';
import User from "./User";
import UserClass from './UserClass';

class About extends React.Component {
  
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  async componentDidMount() {
    console.log("Parent Component Did Mount");
}

  render() {
    console.log("Parent Render");
    return (
      <div>
      <h1>About Class Component</h1>
        {/* <User name={'Vignesh (function)'} /> */}
        <UserClass name={'First'} location={'Chennai class'} twitter={'@Web3Vicky class'} />
        {/* <UserClass name={'Second'} location={'Dehradun class'} twitter={'@Web3Vicky class'} />
        <UserClass name={'Third'} location={'Remote class'} twitter={'@Web3Vicky class'} /> */}
      </div>
    )
  }
}

// const About = () => {
//   return (
//     <div>
//         <h1>About Page</h1>
//         {/* <User name={'Vignesh (function)'} /> */}
//         <UserClass name={'Vignesh (class)'} location={'Chennai class'} twitter={'@Web3Vicky class'} />
//     </div>
//   )
// }

export default About
