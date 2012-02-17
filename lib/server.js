var express = require( 'express' ),
		app = express.createServer(),
		io = require( 'socket.io' ).listen( app ),
		path = require( 'path' );

var config,
	startTime;

app.configure(function(){
	app.use( express.static( __dirname + '/../public' ) );
    app.use( app.router );
});

app.configure('development', function(){
    app.use( express.errorHandler({ dumpExceptions: true, showStack: true }) );
});

app.get( '/socket.io/socket.io.js', function (req, res) {
	res.sendfile( path.join( __dirname, "../node_modules/socket.io/lib/socket.io.js" ) );
} );

app.get( '/', function (req, res) {
	res.sendfile( path.join( __dirname, "../public/index.html" ) );
} );

io.sockets.on( 'connection', function ( socket ) {
	console.log( "New connection: ", socket );
	var now = ( new Date() ).getTime(),
		elapsedTime, remainingTime;

	if ( startTime ) {
		elapsedTime = now - startTime;
		if ( elapsedTime < config.duration * 1000 ) {
			remainingTime = config.duration - Math.floor( elapsedTime / 1000 );
			socket.emit( "start", { timeRemaining: remainingTime } );
		}
	}

	socket.on( 'disconnect', function() {} );
	socket.on( "start", function( data ) {
		config = data;
		config.duration = config.duration || 5 * 60;
		startTime = (new Date()).getTime();
		socket.broadcast.emit( "start", { timeRemaining: config.duration } );
	});

	socket.on( 'message', function ( msg ) {
		if ( msg == "stop" ) {
			startTime = 0;
			socket.broadcast.emit( "stop", { timeRemaining: config.duration } );
		} else {
			socket.broadcast.emit( msg );
		}
	});
});

app.listen( 3000 );