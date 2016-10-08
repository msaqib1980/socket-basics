var socket = io();

socket.on('connect', function(){
          console.log('Connected to socket.io server!');
    
});
    
socket.on('message', function(message){
    console.log('New mesage');
    console.log(message.text);
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