import React from "react";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Timer from "./components/Timer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      element: "login"
    };
  }

  renderElement = () => {
    switch (this.state.element) {
      case "login":
        return <Login handleSetState={this.handleSetState} />;
      case "signup":
        return <Signup handleSetState={this.handleSetState} />;
      case "timer":
        return <Timer handleSetState={this.handleSetState} />;
      default:
        return null;
    }
  };

  handleSetState = tela => {
    this.setState({ element: tela });
  };

  render() {
    return <div className="App">{this.renderElement()}</div>;
  }
}

export default App;
