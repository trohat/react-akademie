import React, { Component } from "react";
import styled from "styled-components";

import Transaction from "../components/Transaction";
import data from "../data.json";

const Button = styled.button`
  color: red;
`;

class App extends Component {
  state = {
    transactions: []
  };

  componentDidMount() {
    this.setState({ transactions: data });
  }

  addTransaction = () => {
    this.setState(prevState => ({
      transactions: [
        ...prevState.transactions,
        {
          name: "Moje",
          value: 100,
          type: "income"
        }
      ]
    }));
  };

  render() {
    return (
      <div>
        <header>
          <h1>basic page for Wallet app</h1>
          <Button onClick={this.addTransaction}>Přidat</Button>
          {this.state.transactions.map(({ name, value, type, id }) => (
            <Transaction key={id} name={name} value={value} type={type} />
          ))}
        </header>
      </div>
    );
  }
}

export default App;
