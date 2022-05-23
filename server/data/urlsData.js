const database = require('../infra/database');


exports.getUrls = () => {
  return database.query('SELECT * FROM url');
}

exports.postUrls = (url) => {
  return database.one('INSERT INTO url(id, title, title_short) VALUES($1, $2, $3) returning *', [url.id, url.title, url.title_short]);
}