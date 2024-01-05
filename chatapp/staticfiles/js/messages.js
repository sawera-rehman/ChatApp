let loc = window.location
let wsStart = 'ws://'

if(loc.protocol === 'https') {
    wsStart = 'wss://'
}
let endpoint = wsStart + loc.host + loc.pathname

var socket = new WebSocket(endpoint);
socket.onopen = async function(e){
    console.log(e)
}
socket.onmessage = async function(e){
    console.log(e)
}
socket.onerror = async function(e){
    console.log(e)
}
socket.onclose = async function(e){
    
}