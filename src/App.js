import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import snowflakes from "./snowflakes.json"

//set the initial state of each component.  Acivity 27.  
class App extends Component {
    state = {
      clicked: [],
      score: 0,
      highscore: 0,
      gameMessage: "",
      messageClass: ""
    };

// Render element with updated data.  
componentDidMount() {
    this.setState({
        gameMessage: "Click an image to begin!",
    });
};

handleClick = (event) => {
  this.setState({
    clicked: [...this.state.clicked, event.target.alt]
  });
  
  if (this.state.clicked.includes(event.target.alt)) {
    this.setState({
      gameMessage: "You guessed incorrectly!",
      score: 0,
      clicked: [],
      messageClass: "incorrect"
    });
  } else {
    
    this.setState({
      gameMessage: "You guessed correctly!",
      score: this.state.score + 1,
      highscore: Math.max(this.state.score + 1),
      messageClass: "correct"
    })
  };
  this.setHighScore();
  this.shuffleArray(snowflakes);
};

// Shuffle an array - Javascript.info
shuffleArray(snowflakes) {
  for (let i = snowflakes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [snowflakes[i], snowflakes[j]] = [snowflakes[j], snowflakes[i]];
  };
};

// Activity 5 
setHighScore(){
  let newScore = this.state.score;
  let newHighScore = this.state.highscore
  if(newHighScore > newScore){
    this.setState({
        highscore: newHighScore
    })
  }
}

// Activity 17 - 18 - 19 - 29
render() {
    return (
      <Wrapper>
        <NavBar
          messageClass={this.state.messageClass === "incorrect" ? "incorrect" : this.state.messageClass === "correct" ? "correct" : ""}
          gameMessage={this.state.gameMessage}
          score={this.state.score}
          highscore={this.state.highscore}
        />
        <Jumbotron />
        <div className="container">
          <div className="row">
            {snowflakes.map(snowflake => (
              <Card
                className={this.state.score === 0 ? "card shake" : "card"}
                key={snowflake.id}
                name={snowflake.name}
                image={snowflake.image}
                handleClick={this.handleClick}
              ></Card>
            ))}
          </div>
        </div>
      </Wrapper>
    );
  };
};

export default App;
