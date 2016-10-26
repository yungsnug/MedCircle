import s from 'ArticleModal/ArticleModal.scss'

export default class ArticleModal extends React.Component {
  static propTypes = {
    dummy: React.PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    var st = this.state;
    var {
      article
    } = this.props;
    return (
      <div className="articleModalContainer">
        <div>{article.title}</div>
      </div>
    )
  }
}
