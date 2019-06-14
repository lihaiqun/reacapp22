// import React, { Component } from 'react';
// class Com extends Component {
//   render () {
//     return (
//       <div>
//         <button onClick = { () => {
//           this.props.getCountFn(this.props.prolist.length)
//         } }>countting</button>
//         <ul>
//           {
//             this.props.prolist.map(item => {
//               return(<li key = { item.id }>{ item.title }</li>)
//             })
//           }
//         </ul>
//       </div>
//     )
//   }
// }
import React from 'react';
const Com = (props) => (
  <div>
  <button onClick = { () => {props.getCountFn(props.prolist.length)}}>计数</button>
  <ul>
    {
      props.prolist.map(item => {
        return(<li key = { item.id }>{ item.title }</li>)
      })
    }
  </ul>
</div>
)
export default Com;