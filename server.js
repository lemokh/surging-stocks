// const favicon = require('serve-favicon');
// const path = require('path');
const express = require('express');

const app = express();

app.use('/css', express.static(process.cwd() + '/css'));
app.use('/scripts', express.static(process.cwd() + '/scripts'));
app.use('/fonts', express.static(process.cwd() + '/fonts'));
// app.use(favicon(path.join(__dirname,'fonts','favicon.ico')));

app.get('/', function(req, res){
			res.sendFile(process.cwd() + '/index.html');
		});

const port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log('Node.js listening on port ' + port + '...');
});