const axios = require('axios');
const { generate } = require('shortid');

const request = function (url, method, data){
  return axios({
    method,
    url,
    data,
  })
}

test('Should get all URLS', async function () {
  const response = await request('http://localhost:5000/urls', 'GET');
  const urls = response.data;
  expect(urls).toHaveLength(7);
})

test('Should insert an URL', async function(){
  const data = {id: 128, title: 'AIMEUDEUS.COM.BR'}
  const response = await request('http://localhost:5000/urls', 'POST', data);
  const urls = response.data;
  expect(urls.title).toBe(data.title);
})