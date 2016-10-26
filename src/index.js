import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from 'components/App/App.js'
import Articles from 'components/Articles/Articles.js'
import ArticleDetail from 'components/ArticleDetail/ArticleDetail.js'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Articles} />
      <Route path="articles" component={Articles} />
      <Route path="article/:articleId" component={ArticleDetail} />
    </Route>
  </Router>
), document.getElementById("app"));
