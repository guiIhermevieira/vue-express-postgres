const express = require('express');
const router = express.Router();
const urlsService = require('../service/urlsService');

router.get('/urls', async function (req, res) {
  const urls = await urlsService.getUrls();
  res.json(urls)
});
router.get('/urls/:id', async function (req, res){
  const url = await urlsService.getUrl();
  res.redirect(url.url);
  console.log("passou aqui no /:urls")
  const shortUrl = await urlsService.getUrls(req.params.url).findOne({url: req.params.url});
  if (shortUrl == null) return res.sendStatus(404)

  res.redirect(shortUrl.url)

});
router.post('/urls', async function (req, res){
  const urls = req.body;
  const newUrl = await urlsService.postUrls(urls);
  res.json(newUrl)
  
});
router.put('/urls/:id', async function (req, res){
  
});
router.delete('/urls/:id', async function (req, res){
  
});

module.exports = router;