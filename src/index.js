import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from 'components/App/App.js'
import FirstComponent from 'components/FirstComponent/FirstComponent.js'
// import MyComponent from 'components/MyComponent/MyComponent.js'

import Api from 'modules/Api.js'
import Session from 'modules/Session.js'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App} /*onEnter={checkSession}*/>
      <IndexRoute component={FirstComponent} />
      <Route path="component" component={FirstComponent} />
    </Route>
  </Router>
), document.getElementById("app"));
