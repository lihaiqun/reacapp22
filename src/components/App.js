import React, { Component } from 'react';
import '@/main';
import Home from './Home';
class Com extends Component{
  render () {
    return (
      <div className = "container">
        <Home></Home>
        <footer className ="footer">footer</footer>
      </div>
    )
  }
}
export default Com;

// import React from 'react';
// const Com = <h1>Hello, world!</h1>
// function fn(user) {
//   if (user) {
//     return "Hello," + user.firstname + " " + user.lastname
//   } else {
//     return "Hello, world!"
//   }
// }
// const user = {
//   firstname: "Gren",
//   lastname: "Davar"
// }
// // const Com = <div>{ fn() }</div>
// React.createElement("h1", {className:'active'}, 'hello shanghai')
// export default Com;