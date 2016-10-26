var Url = require('./Url.js');

class Route {
  constructor(baseUrl) {
    this.baseUrl = `${baseUrl}/`;
  }
  get(url, data) {
    if(arguments.length == 1) {
      return $.get(this.baseUrl + url);
    }

    return $.get(this.baseUrl + url, data);
  }
}

var Api = module.exports = {
  db: new Route(Url.medCircleUrl),
}
