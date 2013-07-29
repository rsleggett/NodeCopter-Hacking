var http = require('http');
var arDrone = require('ar-drone');
var client = arDrone.createClient();
//var stream = client.getPngStream();
//stream.on('data',function(chunk) { 
//	console.log('Got some data: %d bytes', chunk.length);
//});
http.createServer(function(req,res) { 
	
	if(req.url == '/take-off')
	{
		client.takeoff();
		res.end('Take off!');
	}
	if(req.url == '/land')
	{
		client.land();
		res.end('Land!');
	}
	if(req.url == '/up')
	{
		client.up(0.3);
		client.after(1000, function() {
			this.stop();
			this.stop();
			this.stop();
		});
		res.end('Up!');
	}
	if(req.url == '/down')
	{
		client.down(0.3);
		client.after(1000, function() {
			this.stop();
			this.stop();
			this.stop();
		});
		res.end('Down!');
	}
	if(req.url == '/disable-emergency')
	{
		client.disableEmergency();
		res.end('No more emergency!');
	}
	if(req.url == '/left')
	{
		client.left(0.3);
		client.after(1000, function() {
			this.stop();
			this.stop();
			this.stop();
		});
		res.end('Left!');
	}
	if(req.url == '/right')
	{
		client.right(0.3);
		client.after(1000, function() {
			this.stop();
			this.stop();
			this.stop();
		});
		res.end('Right!');
	}
	if(req.url == '/front')
	{
		client.left(0.3);
		client.after(1000, function() {
			this.stop();
			this.stop();
			this.stop();
		});
		res.end('Front!');
	}
	if(req.url == '/back')
	{
		client.right(0.3);
		client.after(1000, function() {
			this.stop();
			this.stop();
			this.stop();
		});
		res.end('Back!');
	}
	res.writeHead(200, {'Content-Type': 'text/plain'});
	console.log(req.url);
})
.listen(5556, '127.0.0.1');