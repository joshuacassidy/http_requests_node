var express = require('express');
var router = express.Router();
const request_utils = require('../utils/request_utils')
const axios = require('axios')



/* GET home page. */
router.get('/', async function(req, res, next) {
  let data = await request_utils.get_star_wars_data()
  res.json(data)
});

router.get('/posts', async function(req, res, next) {
  let data = await axios.get('https://jsonplaceholder.typicode.com/posts');
  res.json(data.data)
});


router.get('/posts/:id', async function(req, res, next) {
  try {
    let data = await axios.get(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`);
    res.json(data.data)
  } catch (e) {
    res.json({"error": "not found"})
  }
});

router.put('/posts/:id', async function(req, res, next) {
  try {
    let data = await axios.put(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`, req.body);
    res.json(data.data)
  } catch (e) {
    res.json({"error": "not found"})
  }
});

router.delete('/posts/:id', async function(req, res, next) {
  try {
    let data = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`);
    res.json(data.data)
  } catch (e) {
    res.json({"error": "not found"})
  }
});

router.post('/posts', async function(req, res, next) {
  try {
    let data = await axios.post(`https://jsonplaceholder.typicode.com/posts/`,  req.body);
    res.json(data.data)
  } catch (e) {
    res.json({"error": "not found"})
  }
});



module.exports = router;
