import React from "react";
import ".././App.css";

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      register: {
        email: [],
        senha: []
      },
      items: [],
      password: []
    };
  }

  register = ev => {
    ev.preventDefault();

    if (this.valueEmail !== "") {
      let newEmail = {
        text: this.valueEmail.value,
        key: Date.now()
      };
      this.setState({ items: [...this.state.items, newEmail] });
    }

    if (this.password !== "") {
      let newPassword = {
        text: this.password.value,
        key: Date.now()
      };
      this.valueEmail = "";
      this.setState({
        password: [...this.state.items, newPassword]
      });
    }
  };

  log = ev => {
    ev.preventDefault();
    console.log(this.state.items, this.state.password);
  };

  render() {
    return (
      <form
        onSubmit={ev => {
          ev.preventDefault();
          this.props.handleSetState("login");
        }}
      >
        {this.state.register.erro && <p>{this.state.register.erro}</p>}
        <label>
          Nome:
          <input type="text" placeholder="Nome" />
        </label>
        <label>
          Email:
          <input
            type="email"
            placeholder="Email"
            onChange={ev => this.setState({ email: ev.target.value })}
            ref={event => (this.valueEmail = event)}
          />
        </label>
        <label>
          Senha:
          <input
            type="password"
            placeholder="Senha"
            onChange={ev => this.setState({ password: ev.target.value })}
            ref={event => (this.password = event)}
          />
        </label>
        <input type="submit" onSubmit={this.register} />
      </form>
    );
  }
}

export default Signup;
