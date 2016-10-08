var name = getQueryVariable('name');
var room = getQueryVariable('room');
var socket = io();

console.log(name + " wants to join " + room);

socket.on('connect', function(){
          console.log('Connected to socket.io server!');
    
});
    
socket.on('message', function(message){
    var momentTimestamp = moment.utc(message.timestamp);
    
    $('#incoming-message').append('<p>' + message.name + ': <strong>' + momentTimestamp.format('h:mm a') + ': </strong>' +  message.text + '</p>');
    
});

// Handle submitting of new message
var $form = $('#message-form');

$form.on('submit', function(event){
    event.preventDefault();
    
    socket.emit('message',{
        name: name,
        text:  $('#message-input').val()
    });
    
    $('#message-input').val('');
    
    
});