import s from 'ArticleDetail/ArticleDetail.scss'
import Api from 'modules/Api.js'
import Navigate from 'modules/Navigate.js'
import {browserHistory} from 'react-router'
import dateFormat from 'dateformat'

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

  renderPublishedDate(article) {
    return (
      <div className="publishedDate">
        Published on: {dateFormat(article.published_at, "mmmm dS, yyyy")}
      </div>
    );
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
          onClick={Navigate.goToArticles.bind(this)}
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
          {this.renderPublishedDate(article)}
          <div className="articleBody">
            {article.body}
          </div>
          <div
            className="backButtonBottom"
            onClick={Navigate.goToArticles.bind(this)}
          >
            &larr; Back to articles
          </div>
        </div>
      </div>
    )
  }
}
