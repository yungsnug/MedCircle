import {browserHistory} from 'react-router'

module.exports = {
  goToArticle: function(articleId) {
    browserHistory.push(`/article/${articleId}`);
  },
  goToArticles: function() {
    browserHistory.push('/articles')
  }
};
