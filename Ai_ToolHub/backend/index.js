const express = require('express')
const app = express()
const path = require('path')
const port = 2222

const mongodb = require('./mongodb')
mongodb()

try{
    app.use((req,res,next) => {
      res.setHeader("Access-Control-Allow-Origin","http://localhost:4040");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      next();
    })
  }
  catch(err){
    console.log("CORS_SYJ_ERROR : "+ err);
  }

app.use(express.json())
app.use(express.static('static'))
app.use('/api',require('./Routes/CreateUser'))
app.use('/api',require('./Routes/LoginUser'))
app.use('/api',require('./Routes/CreateTool'))
app.use('/api',require('./Routes/fav_tool'))
app.use('/api',require('./Routes/CreateCollection'))
app.use('/api',require('./Routes/Fetch_tools'))

app.get('*',(req,res) => {
	res.sendFile(path.join(__dirname, 'static/index.html'))
})


app.listen(port, () =>{
    console.log("app running on port",port)
})
