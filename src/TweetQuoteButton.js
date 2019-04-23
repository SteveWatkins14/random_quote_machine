import React from 'react';

export const TweetQuoteButton = (props) => {
  return (
      <button className="">
        <a id="tweet-quote"
           className="twitter-share-button"
           href={props.tweetQuote}
           target="_blank"
           rel="noopener noreferrer">Post to Twitter
        </a>
      </button>
  );
}
