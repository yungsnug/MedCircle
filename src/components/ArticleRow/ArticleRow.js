import s from 'ArticleRow/ArticleRow.scss'
import dateFormat from 'dateformat'
import Navigate from 'modules/Navigate'

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

  formatArticleDate(date) {
    return dateFormat(date, "mmmm dS, yyyy")
  }

  renderPublishedDate(article) {
    return (
      <div className="publishedDate">
        {dateFormat(article.published_at, "mmmm dS, yyyy")}
      </div>
    );
  }

  render() {
    const st = this.state;
    const {
      article,
    } = this.props;
    return (
      <div className="articleRowContainer">
        <div
          className="articleImage"
          style={{backgroundImage: `url(${article.media_url})`}}
          onClick={Navigate.goToArticle.bind(this, article.id)}
        ></div>
        <div className="innerArticleRowContainer">
          <h1 className="mb10">
            <span
              className="articleTitle"
              onClick={Navigate.goToArticle.bind(this, article.id)}
            >
              {article.title}
            </span>
            <span className="articleLikes">{article.likes_count} Likes</span>
          </h1>
          {this.renderPublishedDate(article)}
          <div className="articleSummary">
            {article.summary}
          </div>
          <div className="articleRowFooter">
            <div className="authorInfo">
              Written by&nbsp;
              <span className="red">
                {article.author.name}
              </span>
            </div>
            <div
              className="previewButton"
              onClick={this.props.showArticleModal.bind(this, article)}
            >
              Preview
            </div>
          </div>
        </div>
      </div>
    )
  }
}
