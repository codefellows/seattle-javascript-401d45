'use strict';

// npm install @faker-js/faker

const socketClient = require('socket.io-client');

const socket = socketClient.connect('http://localhost:3000/caps');

socket.on('pickup', payload => {
  console.log('Picked up order: ', payload.orderId);

  socket.emit('in-transit', payload);

  setTimeout(() => {
    socket.emit('delivery', payload);
  }, 3000);
});

