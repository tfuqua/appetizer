import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Card from 'material-ui/Card';
import Button from 'material-ui/Button';
import glamorous from 'glamorous';

import routes from '../../routes';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Message from 'containers/Message';
import { Container } from 'components/Layout';
import { HEADER_LOCATION, TOAST_RIGHT } from 'containers/Message/actions';

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Content>
          <Header />
          <Message container={TOAST_RIGHT} />
          <Message container={HEADER_LOCATION} />

          <Switch>
            {routes.map(
              (route, i) =>
                route.layout ? React.createElement(route.layout, { key: i, ...route }) : <Route key={i} {...route} />
            )}
            <Route
              render={() => (
                <Card>
                  <Container>
                    <PageNotFound>
                      <h1>Page Not Found</h1>

                      <Link to="/">
                        <Button raised color="accent">
                          Return to Home Page
                        </Button>
                      </Link>
                    </PageNotFound>
                  </Container>
                </Card>
              )}
            />
          </Switch>
        </Content>

        <Footer />
      </AppWrapper>
    );
  }
}

export default App;

const AppWrapper = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh'
});
const Content = glamorous.div({
  flex: 1
});

const PageNotFound = glamorous.div({
  textAlign: 'center',
  paddingBottom: '50px'
});
