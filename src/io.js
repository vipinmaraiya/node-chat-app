import "jquery";

const socket = io();
socket.on("connect",()=>{
    console.log("connected to server");
});
socket.on("disconnect",()=>{
    console.log("Disconnected from server");
});

socket.on("newMessage",(msg)=>{
    let li = $("<li></li>");
    li.text(`${msg.from}: ${msg.text}`)

    $("#messages").append(li);
    console.log(msg);
});


$("#message-form").on("submit", (e)=>{
    e.preventDefault();
    socket.emit("createMessage", {
        from:"vipin",
        text:$("[name=message]").val()
    }, (msg)=>{
        console.log(msg);
    })
});