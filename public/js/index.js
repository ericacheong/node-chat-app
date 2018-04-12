
var socket = io();
socket.on('connect', function () {
   console.log('Connected to server');

   socket.emit('createEmail', {
       to: 'jay@example.com',
       text: 'Hey this is me'
   });

   socket.emit('createMessage', {
       to: 'from client',
       text: 'message from interface'
   })
});

socket.on('disconnect', function () {
    console.log('Disconnected to server');
});
socket.on('newEmail', function (email) {
    console.log("New email", email);
});
socket.on('newMessage', function (msg) {
    console.log('New message:', msg);
});