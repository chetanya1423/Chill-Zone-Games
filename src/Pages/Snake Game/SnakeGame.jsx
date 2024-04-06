import React, { Component, useEffect, useState } from "react";
import Snake from "../../components/Snake Game/Snake";
import Food from "../../components/Snake Game/Food";
import Button from "../../components/Snake Game/Button";
import Menu from "../../components/Snake Game/Menu";
import "../../CSS/Snake Game/Snake.css"
import { allGameHistorySend } from "../../services/GameScoreFunc";
import { useSelector } from "react-redux";
import { withRouter } from 'react-router-dom';


const getRandomFood = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  return [x, y];
};

const initialState = {
  food: getRandomFood(),
  direction: "RIGHT",
  speed: 100,
  route: "menu",
  snakeDots: [[0, 0], [0, 2]],
  token: localStorage.getItem("token")
};

class SnakeGame extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  componentDidMount() {
  
    setInterval(this.moveSnake, this.state.speed);
    document.onkeydown = this.onKeyDown;
  }

  componentDidUpdate() {
    this.onSnakeOutOfBounds();
    this.onSnakeCollapsed();
    this.onSnakeEats();
  }

  

  onKeyDown = e => {
    e = e || window.event;
    switch (e.keyCode) {
      case 37:
        this.setState({ direction: "LEFT" });
        break;
      case 38:
        this.setState({ direction: "UP" });
        break;
      case 39:
        this.setState({ direction: "RIGHT" });
        break;
      case 40:
        this.setState({ direction: "DOWN" });
        break;
    }
  };

  moveSnake = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length - 1];
    if (this.state.route === "game") {
      switch (this.state.direction) {
        case "RIGHT":
          head = [head[0] + 2, head[1]];
          break;
        case "LEFT":
          head = [head[0] - 2, head[1]];
          break;
        case "DOWN":
          head = [head[0], head[1] + 2];
          break;
        case "UP":
          head = [head[0], head[1] - 2];
          break;
      }
      dots.push(head);
      dots.shift();
      this.setState({
        snakeDots: dots
      });
    }
  };

  onSnakeOutOfBounds() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    if (this.state.route === "game") {
      if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
        this.gameOver();
      }
    }
  }

  onSnakeCollapsed() {
    let snake = [...this.state.snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach(dot => {
      if (head[0] == dot[0] && head[1] == dot[1]) {
        this.gameOver();
      }
    });
  }

  onSnakeEats() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    let food = this.state.food;
    if (head[0] == food[0] && head[1] == food[1]) {
      this.setState({
        food: getRandomFood()
      });
      this.increaseSnake();
      this.increaseSpeed();
    }
  }

  increaseSnake() {
    let newSnake = [...this.state.snakeDots];
    newSnake.unshift([]);
    this.setState({
      snakeDots: newSnake
    });
  }

  increaseSpeed() {
    if (this.state.speed > 10) {
      this.setState({
        speed: this.state.speed - 20
      });
    }
  }

  onRouteChange = () => {
    this.setState({
      route: "game"
    });
  };

  gameOver() {
 allGameHistorySend("Snake", this.state.snakeDots.length - 2, this.state.token)
    alert(`GAME OVER, your score is ${this.state.snakeDots.length - 2}`);
    this.setState(initialState);
  }

  onDown = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length - 1];

    head = [head[0], head[1] + 2];
    dots.push(head);
    dots.shift();
    this.setState({
      direction: "DOWN",
      snakeDots: dots
    });
  };

  onUp = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length - 1];

    head = [head[0], head[1] - 2];
    dots.push(head);
    dots.shift();
    this.setState({
      direction: "UP",
      snakeDots: dots
    });
  };

  onRight = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length - 1];

    head = [head[0] + 2, head[1]];
    dots.push(head);
    dots.shift();
    this.setState({
      direction: "RIGHT",
      snakeDots: dots
    });
  };

  onLeft = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length - 1];

    head = [head[0] - 2, head[1]];
    dots.push(head);
    dots.shift();
    this.setState({
      direction: "LEFT",
      snakeDots: dots
    });
  };




  render() {
    const { route, snakeDots, food } = this.state;


 

// useEffect( ()=>{

// }, [] )

    return (
      <div className=" absolute top-0  w-full ">
        <div className="snakeGame">
          {route === "menu" ? (
            <div>
              <Menu onRouteChange={this.onRouteChange} />
            </div>
          ) : (
            <div className=" relative w-full">
              <div className="game-area">
                <Snake snakeDots={snakeDots} />
                <Food dot={food} />
              </div>
              <div className=" text-4xl absolute top-0 right-10">
                <h1 className="text-white font-bold flex justify-center items-center">Score :- <span>  {" "}{snakeDots.length - 2}</span></h1>
              </div>
              {/* <Button
              onDown={this.onDown}
              onLeft={this.onLeft}
              onRight={this.onRight}
              onUp={this.onUp}
            /> */}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default SnakeGame;
