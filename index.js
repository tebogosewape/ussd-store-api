require('dotenv').config()
const express = require('express');
const app = express();
const routes = require('./routes/api');

const bodyParser = require('body-parser');

const port = process.env.PORT || 3050;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/v1/', routes);

app.listen(port, () => {
	console.log(`App listening on ${port}`);
});