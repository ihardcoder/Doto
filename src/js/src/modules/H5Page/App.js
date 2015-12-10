import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setBakColor } from './actions';

import * as H5Page from './components/H5Page';

class AppOperater extends Component {
  render() {
    const { dispatch ,styles} = this.props;
    return (
      <div>
        <H5Page.Operater clickHandler={color => dispatch(setBakColor(color))} styles={this.props.styles}/>
      </div>
    );
  }
}

AppOperater.propTypes = {
  styles: PropTypes.object.isRequired
};

class AppShowcase extends Component {
  render() {
    const { dispatch ,styles} = this.props;
    return (
      <div>
        <H5Page.Showcase clickHandler={color => dispatch(setBakColor(color))} styles={this.props.styles}/>
      </div>
    );
  }
}

AppShowcase.propTypes = {
  styles: PropTypes.object.isRequired
};

function select(state) {
  return {
    styles: state.setStyles
  };
}

export const Operater = connect(select)(AppOperater)

export const Showcase = connect(select)(AppShowcase);

export * as reducers from './reducers';
