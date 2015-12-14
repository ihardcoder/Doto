import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setBakColor,setStatus,toggleBakcolorInput } from './actions';

import * as H5Page from './components/H5Page';

class AppOperater extends Component {
  render() {
    const { dispatch,styles} = this.props;
    return (
      <div>
        <H5Page.Operater
          setBakcolor={color => dispatch(setBakColor(color))}
          setStatus = {isshown => dispatch(setStatus(isshown))}
          toggleBakcolorInput = {isshown => dispatch(toggleBakcolorInput(isshown))}
          styles={this.props.styles}
          status={this.props.status}
          />
      </div>
    );
  }
}

AppOperater.propTypes = {
  styles: PropTypes.object.isRequired,
  status: PropTypes.object.isRequired
};

class AppShowcase extends Component {
  render() {
    const { dispatch,styles,status} = this.props;
    return (
      <div>
        <H5Page.Showcase  styles={this.props.styles} />
      </div>
    );
  }
}

AppShowcase.propTypes = {
  styles: PropTypes.object.isRequired
};

function select(state) {
  return {
    styles: state.setStyles,
    status: state.setStatus
  };
}

export const Operater = connect(select)(AppOperater);

export const Showcase = connect(select)(AppShowcase);

export * as reducers from './reducers';
