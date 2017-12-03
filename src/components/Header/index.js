//@flow
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
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
            {this.props.location.pathname === '/' && (
              <Link to="/vote">
                <Button raised>Vote</Button>
              </Link>
            )}
            &nbsp;&nbsp;
            <Link to="/admin">Admin</Link>
          </div>
        </HeaderWrapper>
      </AppBar>
    );
  }
}

export default withRouter(Header);

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
