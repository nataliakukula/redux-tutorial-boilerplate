import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions';

//the reason why we are not providing the "props" in our App.js component
//is because those props live in the store -> 
//they are always accesible from the highest state
class UserList extends Component {

  createListItems(){
    return this.props.users.map((user) => {
      //this is where we're triggering onClick the passing of the user
      //if any of the elements recognize the event, the function gets triggered
      //look below!...
      return <li key={user.id} onClick={() => this.props.selectUser(user)}>{user.first} {user.last}</li>
    })
  }

  render () {
    return (
      <ul>
        {this.createListItems()}
      </ul>
    )
  }
}

function mapStateToProps(state){
    return {
      users: state.users
    };
}

//After the function has been called it gets passed into 
//the dispatcher - the object with the new state gets sent
//with the props to the highest state
function matchDispatchToProps(dispatch){
  return bindActionCreators({selectUser: selectUser}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);