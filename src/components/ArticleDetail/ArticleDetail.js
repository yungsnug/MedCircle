import s from 'ArticleDetail/ArticleDetail.scss'
import Api from 'modules/Api.js'
import {browserHistory} from 'react-router'

export default class ArticleDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      article: null
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

    if(!article) {
      return null;
    }

    return (
      <div className="articleDetailContainer">
        <div
          className="backButtonTop"
          onClick={this.goToArticles.bind(this)}
        >
          &larr; Back to articles
        </div>
        <div className="innerArticleDetailContainer">
          <div
            className="mediaImage"
            style={{backgroundImage: `url(${article.media_url})`}}
          ></div>
          <div className="authorRow">
            <div
              className="authorImage"
              style={{backgroundImage: `url(${article.author.icon_url})`}}
            ></div>
            <div className="authorName">
              <span className="articleBy">An article by</span> {article.author.name}
            </div>
          </div>
          <div className="articleTitle">
            {article.title}
            <span className="articleLikes">
              {article.likes_count} likes
            </span>
          </div>
          <div className="articleBody">
            {article.body}
          </div>
          <div
            className="backButtonBottom"
            onClick={this.goToArticles.bind(this)}
          >
            &larr; Back to articles
          </div>
        </div>
      </div>
    )
  }
}
