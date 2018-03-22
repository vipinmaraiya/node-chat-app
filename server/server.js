const path = require("path"),
express = require("express"),
app = express();
const publicPath = path.join(__dirname,
    "../public");
app.use(express.static(publicPath));

app.get("/", (req, res) =>{
    
});

app.listen(3000, ()=>{
    console.log(`Server is running on port 3000`);
});