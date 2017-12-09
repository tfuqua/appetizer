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
            <p>
              <font size="5" color="#94192B"><b>St. Clair Xmas Appetizer Contest</b></font>
            </p>
          </div>
          <div>
            {this.props.location.pathname !== '/vote' ? (
              <Link to="/vote">
                <Button raised color="accent">
                  Vote
                </Button>
              </Link>
            ) : (
                <Link to="/">
                  <Button raised color="accent">
                    Leaderboard
                </Button>
                </Link>
              )}
          </div>
        </HeaderWrapper>
      </AppBar >
    );
  }
}

export default withRouter(Header);

const HeaderWrapper = glamorous.div({
  minHeight: 104,
  padding: '50px 8px 8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '& a > p': {
    color: '#fff'
  }
});
