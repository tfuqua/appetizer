//@flow
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import glamorous from 'glamorous';

import Lights from 'components/Lights';

class Header extends Component<*> {
  render() {
    return (
      <Wrapper>
        <AppBar position="static">
          <HeaderWrapper>
            <div>
              <Link to="/">
                <Typography>St. Clair App Contest</Typography>
              </Link>
            </div>

            <div>
              {this.props.location.pathname !== '/vote' && (
                <Link to="/vote">
                  <Button raised color="accent">
                    Vote
                  </Button>
                </Link>
              )}
            </div>
          </HeaderWrapper>
        </AppBar>
        <Lights />
      </Wrapper>
    );
  }
}

export default withRouter(Header);

const Wrapper = glamorous.div({
  marginBottom: '32px'
});

const HeaderWrapper = glamorous.div({
  minHeight: 54,
  padding: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '& a > p': {
    color: '#fff'
  }
});
