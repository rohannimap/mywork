const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.listen(8000,() => {
    
console.log("listen post 8000");

})
app.get('/', (req, res)=>{
    res.send("it work");
})

app.post('/car',(req,res)=>{
 const {name,brand} = req.body;
 console.log(name);
 console.log(brand);
   res.send( "it work well");
})