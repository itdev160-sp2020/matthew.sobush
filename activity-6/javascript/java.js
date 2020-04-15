//array to store message
var message=[];

//message type lookup object 
var messageType = {
    out: 'out-message',
    in: 'in-message',
    unknown: 'unknown-message'
}

//seed data
var data = [
    {
        type: messageType.out,
        user:'Matt',
        message : 'Hey what are you making for dinner?'
    }
    {
        type: messageType.in,
        user:'kole',
        message:'I am going to be making burbon chicken. When will be home?'
    }
    {
        type:messageType.out,
        user:'Matt',
        message:'At 6 p.m.'
    }
];

//message constructor function
function message(type, user, message) {
    this.type = type;
    this.user = user;
    this.message = message;
}

//function to create and return an elementfor the supplied message
function createMessageElement(message){
    //create text element for the message
    var messageText = document.createTextNode(
        message.user + ': ' + message.message
    );

    //create the element and add text
    var messageEl= document.createElement('div');
    messageEl.appendChild(messageText);

    //add a class
    messageEl.className= message.type;

    return messageEl;
}

//button click event to add new message
function addMessageHandler(event){
    var user,type;
    var messageInput = document.getElementById('message-input');
    var messageContainerEl = document.getElementById('message-container');

//determine message typ and seg variables
switch(event.target.id){
    case'send-button':
    user='Matt';
    type=messageType.out;
    break;
    case 'reply-button':
    user = 'kole';
    type = messageType.in;
    break;
    default:
    user = 'unknown';
    type = messageType.unknown;
}

//create message
if (messageInput.value != '') {
    //construct a message and add it to array
    var message = new MessageChannel(type, user, messageInput.value);
    message.push(message);

    //create element
    var el= createMessageElement(message);

    //add elemet to dom
    messageContainerEl.appendChild(el);

    //reset input
    messageInput.value = '';
}
}

//load seed data from array above
function loadSeedData( ) {
    for (let i = 0; i < data.length; i++) {
        var message = new Message(data[i].type, data[i].user, data[i].message);
        message.push(message);
    }

    //load view with pre loaded messages
    var messageContainerEl = document.getElementById('message-container')

    for (var i = 0;i<messages.length;i++){
        var message = message[i];
        var el= createMessageElement(message)

        messageContainerEl.appendChild(el);
    }
}

var init = function() {
//wire event handlers
document.getElementById('send-button').onclick = addMessageHandler;
document.getElementById('reply-button').onclick = addMessageHandler;

//load send data from array above
loadSeedData();

};

init();