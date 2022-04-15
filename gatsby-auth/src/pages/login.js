import React, { Component } from "react"
import { navigate } from "gatsby"
import { handleLogin } from "../services/auth"
import { ShakeHorizontal } from "reshake"
export default class Login extends Component {
  state = {
    password: ``,
    wrongPassActive: false,
  }

  handleUpdate = event => {
    console.log(event.target.name)
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state)
    return handleLogin(this.state)
  }

  handleWrongPass = () => {
    this.setState({
      wrongPassActive: true
    });
    setTimeout(() => {
      this.setState({
        wrongPassActive: false
      });
    }, 400);
  }

  render() {
    return (
      <ShakeHorizontal v={0} w={10} dur={400} fixed={true} active={this.state.wrongPassActive}>
        <div
          style={{
            display: "flex",
            backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "30vh",
            width: "60vh",
            borderRadius: "5%"
          }}
        >
          <h1
            style={{
              fontSize: 20,
              fontFamily: "Tahoma",
              color: "coral",
              paddingBottom: "3vh",
            }}
          >
            Type in the password to see all.
          </h1>
          <form
            class="row g-3"
            method="post"
            onSubmit={event => {
              if (this.handleSubmit(event)) {
                navigate(`profile`)
              } else {
                this.handleWrongPass();
              }
            }}
          >
            <div class="col-auto">
              <label class="visually-hidden">
                Password
              </label>
              <input
                type="password"
                name="password"
                class="form-control"
                id="inputPassword2"
                placeholder="Password"
                onChange={this.handleUpdate}
              />
            </div>
            <div class="col-auto">
              <button type="submit" class="btn btn-primary mb-3">
                Submit
              </button>
            </div>
          </form>
        </div>
      </ShakeHorizontal>
    )
  }
}
