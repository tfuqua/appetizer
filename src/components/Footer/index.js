//@flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import glamorous from 'glamorous';

class Footer extends Component<*> {
  render() {
    return (
      <footer>
        <StyledDiv>
          <Link to="/admin">Admin</Link>
        </StyledDiv>
      </footer>
    );
  }
}

export default Footer;

const StyledDiv = glamorous.div({
  padding: '16px 16px',
  marginTop: '32px',
  background: '#D8D8D8',
  textAlign: 'center',
  '& a': {
    color: '#555'
  }
});
