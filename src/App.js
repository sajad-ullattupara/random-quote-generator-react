import React from "react";
import Quote from "./components/Quote";
import data from './components/Data'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: data[0].quote,
      author: data[0].author,
    };
  }

  randomQuote() {
    const randomNumber = Math.floor(Math.random() * data.length);
    return data[randomNumber];
    
  }
  shuffleQuotes(array){
    return array.sort(()=>Math.random()-0.5)
  }

  handleClick = () => {
    const generateRandomQuote = this.randomQuote();
    this.setState({
      quote: generateRandomQuote.quote,
      author: generateRandomQuote.author
    });
    this.shuffleQuotes(data)
  };
  
  render() {
    return (
      <div>
        <Quote
          handleClick={this.handleClick}
          {...this.state}
        />
      </div>
    );
  }
}

export default App;