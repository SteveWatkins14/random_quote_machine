import React, { Component } from 'react';
import { DisplayQuote } from './DisplayQuote';
import { DisplayButtons } from './DisplayButtons';
import Container from 'react-bootstrap/Container';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: '',
      tweet: '',
      isLoaded: false
    }

    this.getNewQuote = this.getNewQuote.bind(this);
    this.createTweet = this.createTweet.bind(this);
  }

  getNewQuote() {
    this.setState({
      isLoaded: false
    })
    const END_POINT = 'https://thesimpsonsquoteapi.glitch.me/quotes';
    fetch(END_POINT)
    .then(response => response.json())
    .then(json => {
      this.setState({
          quote: json[0].quote,
          author: json[0].character,
          isLoaded: true,
          tweet: this.createTweet(json[0])
      })
    });
  }

  createTweet(data) {
    let convertedQuote = data.quote.split(' ').join('%20');
    let convertedAuthor = data.character.split(' ').join('%20');
    let tweet = "https://twitter.com/intent/tweet?hashtags=quote&text=%22" +
    convertedQuote + "%22%20" + convertedAuthor;
    return tweet;
  }

  componentWillMount() {
    this.getNewQuote();
  }

  render() {
    return (
      <Container id="quote-box" className='App'>
        <h1 id="title">Random Quote Generator</h1>
        <DisplayQuote quote={this.state} />
        <DisplayButtons getNewQuote={this.getNewQuote}
                        tweetQuote={this.state.tweet}/>
      </Container>
    );
  }
}

export default App;
