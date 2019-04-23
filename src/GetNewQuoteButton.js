import React from 'react';

export const GetNewQuoteButton = (props) => {
  return (
      <button id="new-quote"
              onClick={props.getNewQuote}>Random Quote
      </button>
  );
}
