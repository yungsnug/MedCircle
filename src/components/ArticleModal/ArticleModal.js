import s from 'ArticleModal/ArticleModal.scss'
import Modal from 'elements/Modal/Modal.js'
import Api from 'modules/Api.js'
import Navigate from 'modules/Navigate.js'

export default class ArticleModal extends React.Component {
  static propTypes = {
    article: React.PropTypes.object.isRequired,
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
      article
    } = this.props;
    return Api.db.get(`articles/${article.id}.json`)
    .then((article) => {
      this.setState({article: article});
    })
  }


  renderArticleModalContent() {
    var {
      article
    } = this.state;

    if(!article) {
      return null;
    }

    return (
      <div className="articleModalContainer">
        <h1 className="articleTitle">{article.title}</h1>
        <p className="articleBody">{article.body}</p>
        <div
          onClick={Navigate.goToArticle.bind(this, article.id)}
          className="seeFullArticleButton"
        >
          See full article &rarr;
        </div>
      </div>
    );
  }

  render() {
    var st = this.state;
    var {
      article
    } = this.props;
    return (
      <Modal
        content={this.renderArticleModalContent()}
        closeModal={this.props.closeArticleModal.bind(this)}
      />
    )
  }
}
