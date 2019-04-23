import React from 'react';
import Button from 'react-bootstrap/Button';

export const GetNewQuoteButton = (props) => {
  return (
      <Button variant="success" id="new-quote"
              onClick={props.getNewQuote}>Random Quote
      </Button>
  );
}
