import React, { Component } from 'react';
import { DisplayQuote } from './DisplayQuote';
import { DisplayButtons } from './DisplayButtons';
import Container from 'react-bootstrap/Container';

class App extends Component {
  constructor(props) {
    super(props);
    // State centered in app and passed down to child components
    this.state = {
      quote: '',
      author: '',
      tweet: '',
    }

    // bind state to these functions
    this.getNewQuote = this.getNewQuote.bind(this);
    this.createTweet = this.createTweet.bind(this);
  }

  // called on initial page load and when Random Quote button is clicked
  getNewQuote() {

    // fetch JSON quote object from this url
    const END_POINT = 'https://thesimpsonsquoteapi.glitch.me/quotes';
    fetch(END_POINT)
    .then(response => response.json())
    // setState to update display
    .then(json => {
      this.setState({
          quote: json[0].quote,
          author: json[0].character,
          tweet: this.createTweet(json[0])
      })
    })
    // show error on failed fetch
    .catch(error => {
      console.error("Failed to retrieve quote");
      this.setState({
        quote: "Failed to retrieve quote",
        author: "",
        tweet: ""
      })
    });
  }

  // take quote and author and convert to Twitetr link
  createTweet(data) {
    let convertedQuote = data.quote.replace(' ', '%20');
    let convertedAuthor = data.character.replace('', '%20');
    let tweet = "https://twitter.com/intent/tweet?hashtags=quote&text=%22" +
    convertedQuote + "%22%20" + convertedAuthor;
    return tweet;
  }

  // update state on load
  componentWillMount() {
    this.getNewQuote();
  }

  render() {
    return (
      <Container id="quote-box" className='App'>
        <h1 id="title">Random Quote Generator</h1>
        <DisplayQuote quote={this.state.quote}
                      author={this.state.author} />
        <DisplayButtons getNewQuote={this.getNewQuote}
                        tweetQuote={this.state.tweet}/>
      </Container>
    );
  }
}

export default App;
