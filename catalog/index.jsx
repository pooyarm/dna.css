import React from 'react';
import ReactDOM from 'react-dom'

import './styles/index.scss';

const App = () => (
  <div>
    <b>dna.css:</b>
    <span>Hello World</span>
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))
