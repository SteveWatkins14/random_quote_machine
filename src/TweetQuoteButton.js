import React from 'react';
import Button from 'react-bootstrap/Button';

export const TweetQuoteButton = (props) => {
  return (
      <Button variant="primary">
        <a id="tweet-quote"
           className="twitter-share-button"
           href={props.tweetQuote}
           target="_blank"
           rel="noopener noreferrer">Post to Twitter
        </a>
      </Button>
  );
}
