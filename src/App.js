import React, { Component } from "react";
import MemoryCard from "./components/MemoryCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import memory from "./memory.json";
import "./App.css";



class App extends Component {

  state = {
    memory,
    visited: []
  };

  shuffle = array => {
    let newArray = array.slice();
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = newArray[i];
      newArray[i] = newArray[j];
      newArray[j] = temp;
    }
    return newArray;
  };

  handleClickEvent = id => {
    const containsId = (element) => {
      return element === id;
    };
    if (!this.state.visited.some(containsId)) {
      const mlps = this.shuffle(memory);
      const newVisited = [...this.state.visited, id];
      console.log('NEW VISITED', newVisited)
      this.setState({
        memory: mlps,
        visited: newVisited
      });
      return true;
    }
    return false;
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
            shuffleHandler={this.handleClickEvent}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
