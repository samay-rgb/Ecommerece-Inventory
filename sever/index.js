const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require('cors');
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'amazkart',
});

app.post('/addproducts',(req,res) => {
    const pid = req.body.pid;
    const pname = req.body.pname;
    const price = req.body.price;
    const quantity = req.body.quantity;
    const seller = req.body.seller;
    db.query("INSERT INTO products(pid,pname,price,quantity,seller) VALUES (?,?,?,?,?)",[pid,pname,price,quantity,seller],(err,result) =>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send("Product added successfuly");
        }
    })
})
app.listen(3306,() => {
    console.log("Server running on port 3001");
});
