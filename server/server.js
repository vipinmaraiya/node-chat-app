
const path = require("path"),
express = require("express"),
app = express(),
socketIO = require("socket.io"),
http = require("http");

var server = http.createServer(app);

var io = socketIO(server);

io.on("connection", (socket) =>{
    console.log("New User connected")

    socket.on("disconnect", ()=>{
        console.log("User was disconnected");
    });
    socket.emit("newMail",{
        from:"vipinshar@gmail.com",
        text:"hey there"
    });

    socket.on("createEmail",(newEmail) =>{
        console.log(newEmail);
    });

    socket.emit("newMessage", {
        from:"Server",
        text:"Hey client"
    })

    socket.on("createMsg" ,(msg) =>{
        console.log(msg);
    });
});


const publicPath = path.join(__dirname,
    "../public");
app.use(express.static(publicPath));

server.listen(3000, ()=>{
    console.log(`Server is running on port 3000`);
});