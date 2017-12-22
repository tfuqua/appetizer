//@flow
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import glamorous from 'glamorous';

import Lights from 'components/Lights';

class Header extends Component<*> {
  render() {
    return (
      <AppBar position="static">
        <HeaderWrapper>
          <Lights />
          <div>
            <Link to="/gallery">
              <Button>Gallery</Button>
            </Link>

            {this.props.location.pathname === '/vote' && (
              <Link to="/">
                <Button raised color="accent">
                  Leaderboard
                </Button>
              </Link>
            )}

            {this.props.location.pathname === '/' && (
              <Link to="/vote">
                <Button raised color="accent">
                  Vote
                </Button>
              </Link>
            )}

            {this.props.location.pathname.indexOf('/vote/') >= 0 && (
              <Link to="/">
                <Button raised color="accent">
                  Quit Voting
                </Button>
              </Link>
            )}

            {this.props.location.pathname === '/admin' && (
              <Link to="/">
                <Button raised color="accent">
                  Leaderboard
                </Button>
              </Link>
            )}
          </div>
        </HeaderWrapper>
      </AppBar>
    );
  }
}

export default withRouter(Header);

const HeaderWrapper = glamorous.div({
  minHeight: 104,
  overflow: 'hidden',
  padding: '50px 8px 8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end'
});
