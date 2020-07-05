import React from 'react';
import ReactDOM from 'react-dom'

import PaddingPage from './pages/padding/index.jsx'
import MarginPage from './pages/margin/index.jsx'

import './styles/index.scss';

const App = () => {
  const pages = [
    {
      Component: PaddingPage,
      title: 'Padding',
      alias: 'padding',
    },
    {
      Component: MarginPage,
      title: 'Margin',
      alias: 'margin',
    }
  ]

  return (
    <>
      <div>
        <h1>List of content:</h1>
        <ul>
          {pages.map((page, index) => (
            <li key={index}><a href={`#${page.alias}`}>{page.title}</a></li>
          ))}
        </ul>
      </div>

      {pages.map(({Component, alias}, index) => (
        <div className="page" key={index} id={alias}>
          <Component />
        </div>
      ))}
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
