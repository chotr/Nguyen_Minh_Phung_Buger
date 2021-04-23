import React, { Component } from "react";
import axios from "axios";
import UserList from "./UserList";
import UserFrom from "./UserFrom";
import { Button } from "reactstrap";

export default class UserManagement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      selectedUser: [],
      isOpen: false,
    };
  }

  //   cách 1
  //   componentDidMount() {
  //     axios({ method: "GET", url:"https://6056f9c1055dbd0017e844c9.mockapi.io/api/users" })
  //     .then((result) => {
  //         console.log(result)
  //     });
  //   }

  // cách 2
  async componentDidMount() {
    this.fetchUsera();
  }
  fetchUsera = async () => {
    try {
      const result = await axios({
        method: "GET",
        url: "https://6056f9c1055dbd0017e844c9.mockapi.io/api/users",
      });

      this.setState({ users: result.data });
    } catch (error) {
      console.log(error);
    }
  };
  handleDelete = async (userId) => {
    try {
      await axios({
        method: "GET",
        url: `https://6056f9c1055dbd0017e844c9.mockapi.io/api/users/${userId}`,
      });
      this.fetchUsera();
    } catch (error) {
      console.log(error);
    }
  };

  handleAddUser = async (user) => {
    try {
      await axios({
        method: "POST",
        url: `https://6056f9c1055dbd0017e844c9.mockapi.io/api/users`,
        data: user,
      });
      this.fetchUsera();
      this.HandleToggleModal();
    } catch (error) {
      console.log(error);
    }
  };
  handleGetUser = async (userId) => {
    try {
      const result = await axios({
        method: "GET",
        url: `https://6056f9c1055dbd0017e844c9.mockapi.io/api/users/${userId}`,
      });

      this.setState({
        selectedUser: result.data,
      });
    } catch (error) {}
  };
  handleUpdate = async (user) => {
    const { id, ...data } = user;
    try {
      await axios({
        method: "PUT",
        url: `https://6056f9c1055dbd0017e844c9.mockapi.io/api/users/${id}`,
        data,
      });

      this.fetchUsera();
    } catch (error) {
      console.log(error);
    }
  };
  HandleToggleModal = () => {
    this.setState((state) => ({
      isOpen: !state.isOpen,
    }))
  }
  render() {
    return (
      <div className="container">
        <h1 className="text-center">User Management</h1>
        <div className="text-right my-4">
          <Button color="primary" onClick={this.HandleToggleModal}>Add user</Button>
        </div>
        <UserList
          users={this.state.users}
          onDelete={this.handleDelete}
          onGetUser={this.handleGetUser}
        />
        <UserFrom
          user={this.state.selectedUser}
          isOpen={this.state.isOpen}
          onToggle={this.HandleToggleModal}
          onAddUser={this.handleAddUser}
        />
      </div>
    );
  }
}
