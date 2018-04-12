
var socket = io();
socket.on('connect', function () {
   console.log('Connected to server');

   socket.emit('createMessage', {
       from: 'from client',
       text: 'message from interface'
   })
});

socket.on('disconnect', function () {
    console.log('Disconnected to server');
});

socket.on('newMessage', function (msg) {
    console.log('New message:', msg);
})

