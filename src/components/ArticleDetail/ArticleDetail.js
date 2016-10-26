import s from 'ArticleDetail/ArticleDetail.scss'
import Api from 'modules/Api.js'
import {browserHistory} from 'react-router'

export default class ArticleDetail extends React.Component {
  static propTypes = {
    // dummy: React.PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      article: {}
    }
  }

  componentDidMount() {
    this.fetchArticle();
  }

  fetchArticle() {
    const {
      articleId
    } = this.props.params;
    return Api.db.get(`articles/${this.props.params.articleId}.json`)
    .then((article) => {
      this.setState({article: article});
    })
  }

  goToArticles() {
    browserHistory.push('/articles')
  }

  render() {
    var {article} = this.state;
    var pr = this.props;

    return (
      <div className="articleDetailContainer">
        <div onClick={this.goToArticles.bind(this)}>Back to articles</div>
        <div>{article.title}</div>
      </div>
    )
  }
}
