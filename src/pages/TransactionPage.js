import React, { Component } from "react";
import { faChartBar } from "@fortawesome/free-regular-svg-icons";
import Modal from "react-modal";

import TransactionList from "../components/TransactionList";
import PageContainer from "../components/layout/PageContainer";
import Header from "../components/layout/Header";
import Content from "../components/layout/Content";
import Footer from "../components/layout/Footer";
import ToggleButtons from "../components/ToggleButtons";
import AddTransactionForm from "../components/AddTransactionForm";
import StyledButton from "../components/shared/StyledButton";
import StyledIcon from "../components/shared/StyledIcon";
import withTransactions from "../components/withTransactions";

class TransactionPage extends Component {
  state = {
    filterCategory: 0,
    modalOpen: false,
    newTransaction: {
      name: "",
      value: 0,
      type: "income"
    }
  };

  setTransactinonVisibleCategory = index => {
    this.setState({ filterCategory: index });
  };

  getFilteredTransactions = () => {
    const { filterCategory } = this.state;
    const { transactions } = this.props;

    switch (filterCategory) {
      case 0:
      default:
        return transactions;

      case 1:
        return transactions.filter(
          transaction => transaction.type === "income"
        );

      case 2:
        return transactions.filter(
          transaction => transaction.type === "expense"
        );
    }
  };

  addTransaction = event => {
    event.preventDefault();

    this.setState(prevState => ({
      ...prevState,
      modalOpen: false,
      transactions: [...prevState.transactions, prevState.newTransaction]
    }));
  };

  handleInputChange = event => {
    const { id, value } = event.target;
    this.setState((prevState, event) => ({
      newTransaction: {
        ...prevState.newTransaction,
        [id]: value
      }
    }));
  };

  render() {
    const { filterCategory, modalOpen, newTransaction } = this.state;

    return (
      <PageContainer>
        <Header centered>
          <ToggleButtons
            margin="0 20px 0 0"
            buttonNames={["All", "In", "Out"]}
            onClick={this.setTransactinonVisibleCategory}
            activeIndex={filterCategory}
          />
          <StyledButton
            icon
            onClick={() => this.props.history.push("/overview")}
          >
            <StyledIcon icon={faChartBar} />
          </StyledButton>
        </Header>
        <Content>
          <TransactionList
            transactions={this.getFilteredTransactions()}
            deleteTransaction={this.deleteTransaction}
          />
        </Content>
        <Footer>
          <StyledButton
            block
            onClick={() => this.setState({ modalOpen: true })}
          >
            Add new
          </StyledButton>
        </Footer>
        <Modal
          isOpen={modalOpen}
          onRequestClose={() => this.setState({ modalOpen: false })}
        >
          <AddTransactionForm
            newTransactionValues={newTransaction}
            valueChanged={this.handleInputChange}
            addTransaction={this.addTransaction}
          />
        </Modal>
      </PageContainer>
    );
  }
}

export default withTransactions(TransactionPage);
