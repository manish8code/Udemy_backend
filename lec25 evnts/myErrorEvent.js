
const EventEmitter=require("events")
const eventEmitter=new EventEmitter();

eventEmitter.on("error",(err)=>{
    console.error(`error message : ${err.message}`)
})

eventEmitter.emit("error",new Error("something went wrong"))