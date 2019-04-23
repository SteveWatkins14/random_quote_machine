import React from 'react';

export const DisplayQuote = (props) => {
  return (
    <div className="quote-text">
      <div>
        <span id="text">{props.quote.quote}</span>
      </div>
      <div>
        <span id="author">-{props.quote.author}</span>
      </div>
    </div>
  );
}
