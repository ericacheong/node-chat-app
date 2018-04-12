const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);


io.on('connection', (socket) => {
    console.log('New user connected');
    
    socket.emit('newEmail', {
        from: 'mike@example.com',
        txt: 'What are you making?',
        createdAt: 123
    });

    socket.emit('newMessage', {
        from: 'Sandy',
        text: 'Lunch tomorrow?',
        createdAt: 3343434
    });

    socket.on('createEmail', (newEmail) => {
        console.log('createEmail', newEmail);
    });

    socket.on('disconnect', () => {
        console.log("User was disconnected");
    });

    socket.on('createMessage', (msg) => {
        console.log('createMessage', msg);
    });
});

app.use(express.static(publicPath));

// app.get('/', (req, res) => {
//     res.send('Inside link');
// })

server.listen(port, () => {
    console.log('Server started at port 3000');
});