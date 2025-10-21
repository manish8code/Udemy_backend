const EventEmitter =require("events");
//objext of EventEmiiter is made
const eventEmitter =new EventEmitter();
eventEmitter.on("greet",(username)=>{
    console.log(`hello ${username}`);
});
eventEmitter.on("greet",()=>{
    console.log(`hello this is another one listening to the greet`);
});
eventEmitter.once("getnotify",()=>{
    console.log("this will run only once that user has left")
});
const testing=()=>{
    console.log("I'm a function just for the testing");
}
eventEmitter.on("test",testing);

// //emit the event
// eventEmitter.emit("greet");
// //passing some data to our event emmiter
// eventEmitter.emit("greet","manish");
// eventEmitter.emit("greet","ajay");

// eventEmitter.emit("getnotify");
// //i called it once again but it didn't run
// eventEmitter.emit("getnotify");

// eventEmitter.emit("test");
// eventEmitter.removeListener("test");
// eventEmitter.emit("test");    //now it is removed and can't be called

