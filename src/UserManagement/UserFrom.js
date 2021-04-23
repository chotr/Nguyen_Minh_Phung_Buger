import React, { Component } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, FormGroup, Label, Input } from "reactstrap";

export default class UserFrom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {
        username: "",
        email: "",
        phone: "",
        fullName: "",
        address: "",
      },
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.user.id && prevProps.user.id !== this.props.user.id) {
      this.setState({
        values: this.props.user,
      });
    }
  }

  handleChange = (event) => {
    // this.setState({
    //     values:{
    //         username: event.target.value,
    //     }
    // })

    const { name, value } = event.target;

    this.setState((state) => {
      return {
        values: {
          ...state.values,
          [name]: value,
        },
      };
    });
  };

  handleSubmit = () => {
    if (this.state.values.id) {
      this.props.onUpdateUser(this.state.values);
    } else {
      this.props.onAddUser(this.state.values);
    }

    this.setSState({
      values: {
        username: "",
        email: "",
        phone: "",
        fullName: "",
        address: "",
      },
    });
  };
 

  render() {
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.onToggle}>
        <ModalHeader>User form</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input  type="text"
                    id="username"
                    name="username"
                    value={this.state.values.username}
                    onChange={this.handleChange} />
          </FormGroup>
        <div className="form-group">
                  {/* <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={this.state.values.username}
                    onChange={this.handleChange}
                    className="form-control"
                  /> */}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={this.state.values.email}
                    onChange={this.handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={this.state.values.phone}
                    onChange={this.handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="fullName">Full name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={this.state.values.fullName}
                    onChange={this.handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={this.state.values.address}
                    onChange={this.handleChange}
                    className="form-control"
                  />
                </div>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={this.handleSubmit}>Submit</Button>
          <Button color="danger" onClick={this.props.onToggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
      // <div>
      //   {/* Modal */}
      //   <div
      //     className="modal fade"
      //     id="modelId"
      //     tabIndex={-1}
      //     role="dialog"
      //     aria-labelledby="modelTitleId"
      //     aria-hidden="true"
      //   >
      //     <div className="modal-dialog" role="document">
      //       <div className="modal-content">
      //         <div className="modal-header">
      //           <h5 className="modal-title">Modal title</h5>
      //           <button
      //             type="button"
      //             className="close"
      //             data-dismiss="modal"
      //             aria-label="Close"
      //           >
      //             <span aria-hidden="true">×</span>
      //           </button>
      //         </div>
      //         <div className="modal-body">
               
      //         </div>

      //         <div className="modal-footer">
      //           <button
      //             type="button"
      //             className="btn btn-secondary"
      //             data-dismiss="modal"
      //           >
      //             Cancel
      //           </button>
      //           <button
      //             type="button"
      //             className="btn btn-primary"
      //             onclick={this.handleSubmit}
      //           >
      //             Submit
      //           </button>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}
