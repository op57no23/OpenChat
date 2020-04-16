var express = require('express');
var router = express.Router();

var messageController = require('../controllers/messageController');
var channelController = require('../controllers/channelController');
var userController = require('../controllers/userController')

router.get('/all_channels', verifyToken, channelController.all_channels);

router.post('/new_channel', verifyToken, channelController.new_channel);

router.get('/get_channel/:id', verifyToken, channelController.get_channel);

router.post('/new_message', verifyToken, messageController.new_message);

router.get('/get_messages/:id', verifyToken, channelController.get_messages);

router.put('/add_to_channel', verifyToken, messageController.add_to_channel);

router.post('/login', userController.login);

router.post('/register', userController.register);

function verifyToken (req, res, next) {
  const bearerHeader = req.headers['authorization']

  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ')
    const bearerToken = bearer[1]
    req.token = bearerToken
    next()
  } else {
    res.sendStatus(401)
  }
}

module.exports = router;
