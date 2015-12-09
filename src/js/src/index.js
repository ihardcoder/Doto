import React from 'react';
import {render} from 'react-dom';
import {H5PageOperater,H5PageShowCase} from './modules/H5Page/index';

const SideBar = React.createClass({
  render(){
    return(
      <div className='doto_side'>
        <H5PageOperater />
      </div>
    );
  }
});

const Drama = React.createClass({
  render(){
    return(
      <div className='doto_drama'>
        <H5PageShowCase />
      </div>
    );
  }
});

render(
  <div class='doto'>
    <SideBar />
    <Drama />
  </div>,
  document.getElementById('doto_window')
);
