const mongoose = require('mongoose');

const connString = 'mongodb+srv://brunoukomadu1_db_user:HPaaznvnEa9nRXkL@cluster0.sjmhmye.mongodb.net/bookmystay'
mongoose.connect(connString)
.then((conn)=> {
   console.log('connetion to DB was successful');
})

// const express = require('express');
// const app = express();

// app.get('/', function(req, res){
//    res.send("Hello world!");
// });
// app.listen(3000);

// 


const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/students', (req, res) => {
    res.json([
        { id: 1, name: "Bruno", gender: "male" },
        { id: 2, name: "Dian", gender: "female" },
        { id: 3, name: "Carl", gender: "male" }
    ]);
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});