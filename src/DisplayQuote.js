import React from 'react';

export const DisplayQuote = (props) => {
  return (
    <div className="quote-text">
      <div id="text-div">
        <span id="text">{props.quote.quote}</span>
      </div>
      <div id= "author-div">
        <span id="author">-{props.quote.author}</span>
      </div>
    </div>
  );
}
