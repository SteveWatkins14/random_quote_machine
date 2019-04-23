// Only used a wrapper for Tweet Button and Random Quote Button
import React from 'react';
import { TweetQuoteButton } from './TweetQuoteButton';
import { GetNewQuoteButton } from './GetNewQuoteButton';

export const DisplayButtons = (props) => {
  return (
    <div id="button-div">
      <TweetQuoteButton tweetQuote={props.tweetQuote}/>
      <GetNewQuoteButton getNewQuote={props.getNewQuote}/>
    </div>
  );
}
