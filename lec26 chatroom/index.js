const ChatRoom=require("./chatRoom.js")
const chat=new ChatRoom();
chat.on('join',(user)=>{
    console.log(`${user} has joined`)
})
chat.on('sendMessage',(user,msg)=>{
    console.log(`${user} : ${msg}`)
})
chat.on('leave',(user)=>{
    console.log(`${user} left`)
})


//simulating the chat
chat.join('alice')
chat.join('bob')
chat.sendMessage('alice','hey everyone')
chat.join('manish')
chat.sendMessage('bob','hola')
chat.leave('bob')
chat.sendMessage('bob','this will not be send')