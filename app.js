const express= require("express");
const app= express();
const port= 3002;

const students= require('./DB/Students.js');

app.get('/stu', (req, res) => {
    res.send(students);
});

app.get('/stu/:id', (req, res) => {
    const id= req.params.id;
    const result= students.find(student => student.id == id);
    // 
    if(result != null){
        res.send(result);
    }else{
        res.status(404).send("Student not found...");
    }
    
});

app.get('/stu/gender/:gen', (req, res) => {
    const gender= req.params.gen;
    const result= students.filter(student => student.Gender == gender);
    res.send(result);
})

app.get('/', (req, res)=>{
    res.send("Hello Express JS");
});

app.get('/msg', (req, res)=>{
    res.send("Hello IT Students.");
});

app.listen(port, ()=> {
        console.log(`Server is running on ${port}`);
});


