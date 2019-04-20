const http = require('http');
const app = require('./app')

var config = {
    appRoot: __dirname, // required config
};

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
