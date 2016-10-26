import s from 'Articles/Articles.scss'
import ArticleRow from 'ArticleRow/ArticleRow.js'
import ArticleModal from 'ArticleModal/ArticleModal.js'
import Modal from 'elements/Modal/Modal.js'
import Api from 'modules/Api'

export default class Articles extends React.Component {
  static propTypes = {
    // dummy: React.PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      articles: [],
      currentArticle: {}
    }
  }

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles() {
    return Api.db.get('articles.json')
    .then((articles) => {
      this.setState({articles: articles});
    })
  }

  showArticleModal(currentArticle) {
    this.setState({
      currentArticle: currentArticle,
      showModal: true
    });
  }

  closeArticleModal() {
    this.setState({showModal: false});
  }

  renderArticles() {
    return this.state.articles.map((article, i) => {
      return <ArticleRow
        key={i}
        article={article}
        showArticleModal={this.showArticleModal.bind(this)}
      />
    })
  }

  renderArticleModal() {
    const {
      currentArticle,
      showModal
    } = this.state;
    if(!showModal) {
      return null;
    }

    return <ArticleModal
      article={currentArticle}
      closeArticleModal={this.closeArticleModal.bind(this)}
    />
  }

  render() {
    const {
      currentArticle
    } = this.state;
    const pr = this.props;
    return (
      <div className="articlesContainer">
        {this.renderArticles()}
        {this.renderArticleModal()}
      </div>
    )
  }
}
