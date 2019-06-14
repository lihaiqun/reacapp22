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