import React from "react";
import ".././App.css";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: [],
      senha: []
    };
  }

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
          <input
            type="email"
            placeholder="email@email.com"
            onChange={ev => this.setState({ email: ev.target.value })}
          />
        </label>
        <label>
          Senha:
          <input
            type="text"
            placeholder="Senha"
            onChange={ev => this.setState({ senha: ev.target.value })}
          />
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
