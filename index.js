var port = process.env.PORT || 3000;
var app = express();

app.get('/', function(request, response) {
	response.sendfile(__dirname + 'dist/index.html');
}).configure(function() {
	app.use('/images', express.static(__dirname + '/images'));
}).listen(port);