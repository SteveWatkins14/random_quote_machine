import React from 'react';
import { TweetQuoteButton } from './TweetQuoteButton';
import { GetNewQuoteButton } from './GetNewQuoteButton';

export const DisplayButtons = (props) => {
  return (
    <div className="">
      <TweetQuoteButton tweetQuote={props.tweetQuote}/>
      <GetNewQuoteButton getNewQuote={props.getNewQuote}/>
    </div>
  );
}
