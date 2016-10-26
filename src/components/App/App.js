import s from 'App/App.scss'
import Api from 'modules/Api.js'
import {browserHistory} from 'react-router'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    var st = this.state;
    var pr = this.props;

    var props = {};

    return (
      <div className="appContainer">
        {React.Children.map(pr.children, function(child) {
          return React.cloneElement(child, props);
        })}
      </div>
    )
  }
}
