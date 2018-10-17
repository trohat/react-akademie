import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Transaction from "../components/Transaction";
import data from "../data.json";

const Button = styled.button`
  color: red;
`;

class TransactionPage extends Component {
  state = {
    transactions: [],
    newTransaction: {
      name: "",
      value: 0,
      type: "income"
    }
  };

  componentDidMount() {
    this.setState({ transactions: data });
  }

  addTransaction = event => {
    event.preventDefault();
    this.setState(prevState => ({
      transactions: prevState.transactions.concat(prevState.newTransaction)
    }));
  };

  handleInputChange = event => {
    const newTransactionCopy = { ...this.state.newTransaction };
    newTransactionCopy[event.target.id] = event.target.value;
    this.setState({ newTransaction: newTransactionCopy });
  };

  render() {
    const {
      transactions,
      newTransaction: { name, value, type }
    } = this.state;

    return (
      <div>
        <header>
          <h1>basic page for Wallet app</h1>
          <Link to="/overview">Overview Page</Link>
          <br />
          <form>
            <input
              type="text"
              id="name"
              value={name}
              onChange={this.handleInputChange}
            />
            <br />
            <input
              type="number"
              id="value"
              value={value}
              onChange={this.handleInputChange}
            />
            <br />
            <select id="type" value={type} onChange={this.handleInputChange}>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
            <Button onClick={this.addTransaction}>Přidat</Button>
          </form>
          {transactions.map(({ name, value, type, id }) => (
            <Transaction key={id} name={name} value={value} type={type} />
          ))}
        </header>
      </div>
    );
  }
}

export default TransactionPage;
