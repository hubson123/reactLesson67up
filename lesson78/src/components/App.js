import React, { Component } from "react";
import "./App.css";
import ButtonFetchUser from "./ButtonFetchUser";
import UserList from "./UserList";
const API = "https://randomuser.me/api/?results=1";
class App extends Component {
  state = {
    users: [],
  };
  handleDataFetch = () => {
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then((res) => res.json())
      .then((data) => {
        const user = data.results;
        this.setState((prevState) => ({
          users: prevState.users.concat(user),
        }));
      })
      .catch((error) => console.error());
  };
  componentDidMount() {}
  render() {
    const users = this.state.users;

    return (
      <div>
        <ButtonFetchUser click={this.handleDataFetch} />
        {users.length > 0 ? <UserList users={users} /> : users}
      </div>
    );
  }
}

export default App;
