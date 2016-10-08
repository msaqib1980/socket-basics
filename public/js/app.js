var socket = io();

socket.on('connect', function(){
          console.log('Connected to socket.io server!');
    
});
    
socket.on('message', function(message){
    var momentTimestamp = moment.utc(message.timestamp);
    $('#incoming-message').append('<p><strong>' + momentTimestamp.format('h:mm a') + ': </strong>' +  message.text + '</p>');
    
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