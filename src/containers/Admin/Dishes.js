//@flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getDishes } from './actions';
import Loader from 'components/Loader';
import DishTable from './DishTable';

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
      <div>
        <div>{this.props.dishes ? <DishTable dishes={this.props.dishes} /> : <Loader />}</div>
      </div>
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
