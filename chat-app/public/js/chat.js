const socket = io()

socket.on('message', (message)=>{
    console.log('The message is ', message)
})

// socket.on('countUpdated', (count) =>{
//     console.log('The count has been updated!!', count)
// }) 

document.querySelector('#message-form').addEventListener('submit', (e)=>{
     e.preventDefault()

     const message = document.querySelector('input').value

    socket.emit('sendMessage', message)
})



