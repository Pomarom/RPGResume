import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import App from './containers/app'
import config from './particle-config';
import Particles from 'react-particles-js';

import 'sanitize.css/sanitize.css'
import 'semantic-ui-css/semantic.min.css';

import './index.css'
const target = document.querySelector('#root')
const style = {
  width: '100%',
  position: 'absolute',
  top: '0',
  left: '0',
}
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Particles params={config} style={style}/>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)
