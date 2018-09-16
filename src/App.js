import React, { Component } from "react";
import MemoryCard from "./components/MemoryCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import memory from "./memory.json";
import "./App.css";



class App extends Component {

  state = {
    memory
  };

  shuffle = array => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  handleClickEvent = event => {
    const mlps = this.shuffle(memory)
    this.setState({ memory: mlps });
  };

  render() {
    return (
      <Wrapper>
        <Title>My Little Pony Memory Game</Title>
        <span onClick={this.handleClickEvent.bind(this)} >
    </span>
        {this.state.memory.map(mlp => (
          <MemoryCard
            id={mlp.id}
            key={mlp.id}
            image={mlp.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
