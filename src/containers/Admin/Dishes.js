//@flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getDishes } from './actions';
import { Container } from 'components/Layout';

type Props = {
  getDishes: Function,
  dishes: Array<Object>
};

class Dishes extends Component<Props> {
  componentDidMount() {
    this.props.getDishes();
  }

  render() {
    return (
      <Container>
        <pre>{JSON.stringify(this.props.dishes, null, 2)}</pre>
      </Container>
    );
  }
}

function mapStateToProps(store, props) {
  return {
    dishes: store.admin.dishes
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getDishes }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dishes);
