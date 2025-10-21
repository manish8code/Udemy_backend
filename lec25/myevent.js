const EventEmitter =require("events");
//objext of EventEmiiter is made
const eventEmitter =new EventEmitter();
eventEmitter.on("greet",(username)=>{
    console.log(`hello ${username}`);
});
eventEmitter.once("getnotify",()=>{
    console.log("this will run only once that user has left")
});

// //emit the event
// eventEmitter.emit("greet");
// //passing some data to our event emmiter
// eventEmitter.emit("greet","manish");
// eventEmitter.emit("greet","ajay");

// eventEmitter.emit("getnotify");
// //i called it once again but it didn't run
// eventEmitter.emit("getnotify");

