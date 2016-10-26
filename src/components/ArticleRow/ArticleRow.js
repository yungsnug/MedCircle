import s from 'ArticleRow/ArticleRow.scss'
import {browserHistory} from 'react-router'

export default class ArticleRow extends React.Component {
  static propTypes = {
    article: React.PropTypes.object.isRequired,
    showArticleModal: React.PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
    }
  }

  componentDidMount() {
  }

  goToArticle() {
    browserHistory.push(`/article/${this.props.article.id}`)
  }

  render() {
    const st = this.state;
    const {
      article,
    } = this.props;
    return (
      <div className="articleRowContainer">
        <div onClick={this.goToArticle.bind(this)}>{article.title}</div>
        <div onClick={this.props.showArticleModal.bind(this, article)}>
          Show
        </div>
      </div>
    )
  }
}
