const EventEmitter =require('events')

class ChatRoom extends EventEmitter{
    constructor(){
        super()
        this.users=new Set();
        //this is the set data structure which stores unique users
    }
    join(user){
        this.users.add(user)
        this.emit("join",user)
    }
    sendMessage(user,msg){
        if(this.users.has(user)){
            this.emit("sendMessage",user,msg)
        }
        else{
            console.log(`not found the ${user}`)
        }
    }
    leave(user){
        if(this.users.has(user)){
            this.users.delete(user)
            this.emit('left',user)
        }
        else{
            console.log(`user ${user} not in chat`)
        }
    }

}

module.exports=ChatRoom