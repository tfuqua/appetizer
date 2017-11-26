import React from 'react';
import glamorous from 'glamorous';

function Container(props) {
  return <StyledContainer {...props}>{props.children}</StyledContainer>;
}

export default Container;

const StyledContainer = glamorous.div({
  position: 'relative',
  maxWidth: '100%',
  padding: '24px',
  margin: '0 auto'
});
