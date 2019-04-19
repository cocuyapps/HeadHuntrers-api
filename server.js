const http = require('http');
const app = require('./app')

const port = process.env.PORT || 3000;;
const server= http.createServer(app);

var config = {
    appRoot: __dirname, // required config
};

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
