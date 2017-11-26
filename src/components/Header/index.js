//@flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import glamorous from 'glamorous';

class Header extends Component<*> {
  render() {
    return (
      <AppBar position="static">
        <HeaderWrapper>
          <div>
            <Link to="/">
              <Typography>St. Clair App Contest</Typography>
            </Link>
          </div>

          <div>
            <Link to="/vote">
              <Button raised>Vote</Button>
            </Link>
          </div>
        </HeaderWrapper>
      </AppBar>
    );
  }
}

export default Header;

const HeaderWrapper = glamorous.div({
  minHeight: 54,
  padding: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
});
