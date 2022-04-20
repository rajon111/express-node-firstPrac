const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) =>{
    res.send ('hello! hello! hello!! hay hay hay')
})

const users =[
    {id:1, name:'jalim', email:'abc@gmail.com'},
    {id:2, name:'valim', email:'bbc@gmail.com'},
    {id:3, name:'nalim', email:'dca@gmail.com'},
    {id:4, name:'malim', email:'caa@gmail.com'},
    {id:5, name:'calim', email:'eec@gmail.com'},
    {id:6, name:'kalim', email:'eee@gmail.com'},
]

app.get('/users', (req, res) =>{
    //filter by search query
    if(req.query.name){
        const search = req.query.name.toLowerCase()
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
    }else{
        res.send(users)
    }
    
})

app.get('/user/:id',(req, res)=>{
    // console.log(req.params);
    const id = req.params.id
    // const id = parseInt(req.params.id)
    // const user = users[id]
    const user = users.find( u => u.id == id)
    res.send(user)
})

app.post('/user',(req,res)=>{
    console.log(req.body)
    
    const user = req.body
    // res.send('post method ')
    user.id = users.length + 1
    users.push(user)
    res.send(user)
})

app.listen(port, () =>{
    console.log('lisitng to port', port);
    
})