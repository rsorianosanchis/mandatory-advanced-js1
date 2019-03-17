import React,{Component} from 'react';
////import utvecklare filer

export class ChatRutan extends Component {
  constructor(props){
    super(props)
    // this.state = {
    //   inMsg:{}
    // }
    // this.setState=({
    //   inMsg: newMsgInitial
    // })
  }
  render(){


    return (
      <div>
        <h1>Välkommen till rummet </h1>
        <h2>{this.props.anslutMsg}</h2>
        <ul>
          {this.props.allMsg.map((msg)=>{
            console.log(msg);
            return(
              <li key={msg.id}>
                <h3>{msg.username}</h3>
                <p>{msg.content}</p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
ChatRutan.defaultProps = {
  anslutMsg: 'no connected'
}
