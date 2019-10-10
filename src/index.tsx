import React from 'react';
import ReactDOM from 'react-dom';

import ClassComponent from './ClassComponent'
import FunctionalComponent from './FunctionalComponent'

ReactDOM.render(
  <FunctionalComponent color="red" />,
  document.querySelector('#root')
);