var name = getUrlParameter('name') || 'Anonyomus';
var room = getUrlParameter('room') || 'All';
var socket = io();

console.log(name + " wants to join " + room);
 $('h1').text('Welcome to ' + room);


socket.on('connect', function(){
    console.log('Connected to socket.io server!');
    socket.emit('joinRoom',{
                name: name,
                room: room
    });
    
});
    
socket.on('message', function(message){
    var momentTimestamp = moment.utc(message.timestamp).local();
    
    $('#incoming-message').append('<p><em>' + message.name + '</em>: <strong>' + momentTimestamp.format('h:mm a') + ': </strong><br>' +  message.text + '</p>');
    
   
});

// Handle submitting of new message
var $form = $('#message-form');

$form.on('submit', function(event){
    event.preventDefault();
    
    socket.emit('message',{
        name: name,
        room: room,
        text:  $('#message-input').val()
    });
    
    $('#message-input').val('');
    
    
});

