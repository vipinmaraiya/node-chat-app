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
    })
});

const publicPath = path.join(__dirname,
    "../public");
app.use(express.static(publicPath));

server.listen(3000, ()=>{
    console.log(`Server is running on port 3000`);
});