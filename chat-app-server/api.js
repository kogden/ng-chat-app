//api.js

const express = require('express');
const router = express.Router();
const Pusher = require('pusher');

const pusher = new Pusher({
        appId: '555670',
        key: 'f2dc976a72676868ec02',
        secret: '655183e635dd1f3928ba',
    });

router.get('/', (req, res) => {
	res.send('all good');
    });

module.exports = router;

router.post('/pusher/auth', (req, res) => {
	console.log('POST to /pusher/auth');
	const socketId = req.body.socket_id;
	const channel = req.body.channel_name;
	const auth = pusher.authenticate(socketId, channel);
	res.send(auth);
 });

