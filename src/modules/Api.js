var Url = require('./Url.js');

class Route {
  constructor(baseUrl) {
    this.baseUrl = `${baseUrl}/`;
  }
  post(url, data) {
    if(arguments.length == 1) {
      return $.post(this.baseUrl + url);
    }

    return $.post(this.baseUrl + url, data);
  }
  get(url, data) {
    if(arguments.length == 1) {
      return $.get(this.baseUrl + url);
    }

    return $.get(this.baseUrl + url, data);
  }
  create(model, data) {
    return $.post(this.baseUrl + model + '/create', data);
  }
  findOne(model, id) {
    var findUrl = '/find/';
    return $.post(this.baseUrl + model + findUrl + id);
  }
  find(model, data) {
    var findUrl = '/find/';
    if(arguments.length == 1) {
      return $.post(this.baseUrl + model + findUrl);
    }

    return $.post(this.baseUrl + model + findUrl, data);
  }
  update(model, data, id) {
    if(arguments.length == 2){
      return $.post(this.baseUrl + model + '/update', data);
    }
    return $.post(this.baseUrl + model + '/update/' + id, data);
  }
  updateId(model, id,data) {
    return $.post(this.baseUrl + model + '/update/' + id, data);
  }
  addTo(model, id, association, fk) {
    // /:model/:id/:association/:fk
    return $.post(`${this.baseUrl}${model}/${id}/${association}/${fk}`);
  }
  delete(model, id, data) {
    if(arguments.length == 2) {
      return $.post(this.baseUrl + model + '/delete/' + id);
    }

    return $.post(this.baseUrl + model + '/delete/' + id, data);
  }
  deleteFrom(model, id, association, fk) {
    // /:model/:id/:association/:fk
    return $.ajax({
      url: `${this.baseUrl}${model}/${id}/${association}/${fk}`,
      method: 'DELETE',
      dataType: 'json',
      contentType: 'application/json',
    });
  }
}

var Api = module.exports = {
  db: new Route(Url.medCircleUrl),
}
