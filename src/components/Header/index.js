//@flow
import React, { Component } from 'react';
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
            <Typography>St. Clair App Contest</Typography>
          </div>

          <div>
            <Button raised>Vote</Button>
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
