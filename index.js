const express = require("express")
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res)=>{
    res.send("Welcome to my channel")
});
app.get("/about", (req, res)=>{
    res.send("Welcome to my channel. I am a Web Developer")
});
app.get("/contact", (req, res)=>{
    res.send("Welcome to my channel. I am a Web Developer. Please contact me")
});
app.get("/calculator", (req, res)=>{
    res.sendFile(__dirname +"/index.html")
});
app.get("/bmi", (req, res)=>{
    res.sendFile(__dirname +"/bmi.html")
})
app.post("/calculator", (req, res)=>{
    let n1 = Number(req.body.v1)
    let n2 = Number(req.body.v2)
    let sum = n1+n2;
    let prod = n1*n2;
    res.send("Sum of the two numbers is: " + sum + " and their product is: "+ prod)
})
app.post("/bmi", (req, res)=>{
    let w = Number(req.body.weight)
    let h = Number(req.body.height)
    let bmi = w/(h*h);
    
    res.send("BMI of your body is: " + bmi )
})

app.listen(4000, (req, res)=>{
    console.log("Server is running at port : 4000")
})
