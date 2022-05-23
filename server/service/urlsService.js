const urlsData = require('../data/urlsData');

exports.getUrls = () => {
  return urlsData.getUrls();
}

exports.postUrls = (url) => {
  return urlsData.postUrls(url);
}