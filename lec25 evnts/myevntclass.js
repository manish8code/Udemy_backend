const EventEmiiter=require("events")
class Chat extends EventEmiiter{
    sendMessage(msg){
        console.log(`this is msg : ${msg}`);
        this.emit("messageRecieved",msg);
    }
}
const chat=new Chat();
chat.on("messageRecieved",(msg)=>{
    console.log(`new message: ${msg}`);
});

//trigger the event
chat.sendMessage("hello manish");