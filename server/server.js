const express = require('express');
const request = require('request');
const cors = require('cors');

const app = express();

const corsOptions = {
	origin: (origin, callback) => {
		callback(null, true);
	},
};
app.options('*', cors(corsOptions));

const url = 'https://reddit.com';

app.use('/', cors(corsOptions), (req, res) => {
	const request_url = `${url}${req.url}`;
	console.log(request_url);

	req.pipe(request(request_url)).pipe(res);
});

app.listen(3001, () => {
	console.log('listening on 3001');
});
