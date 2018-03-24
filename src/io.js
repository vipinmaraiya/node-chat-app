const socket = io();
socket.on("connect",()=>{
    console.log("connected to server");
});
socket.on("disconnect",()=>{
    console.log("Disconnected from server");
})

socket.on("newMail" ,(email)=>{
console.log(email);
});

socket.on("newMessage", (msg) =>{
    console.log(msg)
})

socket.emit("createMsg", {
    from:"client",
    text:"hey server"
})

socket.emit("createEmail", "Hey there");