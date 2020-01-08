import React from "react";
import ".././App.css";

class Login extends React.Component {
  render() {
    return (
      <form
        onSubmit={ev => {
          ev.preventDefault();
          this.props.handleSetState("timer");
        }}
      >
        <label>
          Email:
          <input type="text" placeholder="email@email.com" />
        </label>
        <label>
          Senha:
          <input type="text" placeholder="Senha" />
        </label>
        <input type="submit" />
        {
          <button
            onClick={event => {
              event.preventDefault();
              this.props.handleSetState("signup");
            }}
          >
            Criar conta
          </button>
        }
      </form>
    );
  }
}

export default Login;
