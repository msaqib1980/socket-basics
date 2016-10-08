var socket = io();

socket.on('connect', function(){
          console.log('Connected to socket.io server!');
    
});
    
socket.on('message', function(message){
    
    $('#incoming-message').append('<p>' + message.text + '</P');
    
});

// Handle submitting of new message
var $form = $('#message-form');

$form.on('submit', function(event){
    event.preventDefault();
    
    socket.emit('message',{
        text:  $('#message-input').val()
    });
    
    $('#message-input').val('');
    
    
});