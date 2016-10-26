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

  renderTopArticleButton(article) {
    return (
      <div
        className="backButtonTop"
        onClick={Navigate.goToArticles.bind(this)}
      >
        &larr; Back to articles
      </div>
    );
  }

  renderMediaImage(article) {
    return (
      <div
        className="mediaImage"
        style={{backgroundImage: `url(${article.media_url})`}}
      ></div>
    );
  }

  renderAuthorRow(article) {
    return (
      <div className="authorRow">
        <div
          className="authorImage"
          style={{backgroundImage: `url(${article.author.icon_url})`}}
        ></div>
        <div className="authorName">
          <span className="articleBy">An article by</span> {article.author.name}
        </div>
      </div>
    );
  }

  renderArticleTitle(article) {
    <div className="articleTitle">
      {article.title}
      <span className="articleLikes">
        {article.likes_count} likes
      </span>
    </div>
  }

  renderBackToArticlesButton() {
    return (
      <div
        className="backButtonBottom"
        onClick={Navigate.goToArticles.bind(this)}
      >
        &larr; Back to articles
      </div>
    );
  }

  render() {
    const {article} = this.state;

    if(!article) {
      return null;
    }

    return (
      <div className="articleDetailContainer">
        {this.renderTopArticleButton(article)}
        <div className="innerArticleDetailContainer">
          {this.renderMediaImage(article)}
          {this.renderAuthorRow(article)}
          {this.renderArticleTitle(article)}
          {this.renderPublishedDate(article)}
          <div className="articleBody">
            {article.body}
          </div>
          {this.renderBackToArticlesButton()}
        </div>
      </div>
    )
  }
}
