var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic("index.html"));
app.listen(8054, () => console.log('Server running on 8054...'));