const express = require('express');
const expbhs = require('express-handlebars');
const path = require('path');


// init 
const app = express();

// settings
app.set('views', path.join(__dirname,))
app.engine('.hbs', expbhs({
	defaultLayout: 'Main',
	layoutsDir: path.join(app.get('views'), 'layouts'),
	partialsDir: path.join(app.get('views'), 'p'),
	extname: '.hbs'
}));

// start server 
app.listen(3000, () =>  {
	console.log('server on port', 3000);
});

