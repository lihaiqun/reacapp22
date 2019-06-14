import React, { Component } from 'react';
class Com extends Component {
  render () {
    console.log(this.props)
    return (
      <div>
        <button onClick = { () => {
          this.props.getCountFn(this.props.prolist.length)
        }}>countting</button>
        <ul>
          {
            this.props.prolist.map(item => {
              return(<li key = { item.id }>{ item.title }</li>)
            })
          }
        </ul>
      </div>
    )
  }
}
export default Com;