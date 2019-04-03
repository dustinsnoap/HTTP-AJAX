import React, { Component } from 'react'
import axios from 'axios'

import Friends from './components/friends'
import Form from './components/form'

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      editid: 0,
      id: 6,
      url: 'http://localhost:5000/friends',
    }
  }
  addFriend = newFriend => {
    let id = this.state.id + 1
    this.setState({id: id})
    newFriend.id = id
    axios
      .post(this.state.url, newFriend)
      .then(res => this.setState({friends: res.data}))
      .catch(err => console.log(err))
  }
  updateFriend = friend => {
    //if id is found, then update
    friend.id = parseInt(friend.id) //it was a string '\o/'
    if(this.state.friends.find(f => f.id === friend.id))
      axios
        .put(`${this.state.url}/${friend.id}`, friend)
        .then(res => this.setState({friends: res.data}))
        .catch(err => console.log(err))
  }
  deleteFriend = friend => {
    axios
      .delete(`${this.state.url}/${friend.id}`)
      .then(res => this.setState({friends: res.data}))
      .catch(err => console.log(err))
  }
  componentDidMount() {
    axios
      .get(this.state.url)
      .then(friends => this.setState({friends: friends.data}))
      .catch(err => console.log('Error: ' + err))
  }
  render() {
    // console.log(this.state)
    return (
      <div className="App">
        <Friends friends={this.state.friends} delete={this.deleteFriend} update={this.updateFriend}/>
        <Form title='update' action={this.updateFriend}/>
        <Form title='add' action={this.addFriend}/>
      </div>
    )
  }
}

export default App
