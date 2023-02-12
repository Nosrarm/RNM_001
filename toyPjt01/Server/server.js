const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();
const mysql  = require('./db/db');
const cors = require('cors');
const dotenv = require('dotenv').config({ path: path.join(__dirname,"./db/.env")});
const bodyParser = require('body-parser');

const port = process.env.PORT || 4000;
app.use(cors());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:true
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'react-project/build')));

// app.get('*', function (req,res) {
//     res.sendFile(path.join(__dirname, '/react-study/public/index.html'));
// });


app.post('/actLogin',(req,res) => {
    console.log(req.body);
    const id = req.body.inputId;
    const pw = req.body.inputPw;
    console.log('(id/pw): ('+id+'/'+pw+')');
    const sql = 'SELECT user_id,user_name,user_idx FROM seon_user_master where user_id=? and user_pw=?';
    const param = [id,pw];
    try{
        mysql.getConnection((err,conn)=>{
            console.log("connection_pool GET");
            if(err) throw err;

            conn.query(sql,[id,pw], (err,result,fields)=>{
                if(err){
                    console.error("connection_pool GET Error / "+err);
                    res.status(500).send("message : Internal Server Error");
                } else {
                    if(result.length === 0 ){
                        res.status(400).send({
                            success: false,
                            message: "DB response Not Found"
                        });
                    } else {
                        res.status(200).json({
                            success: true,
                            result
                        });
                    }
                }
            });

            conn.release(); // Connectino Pool 반환
        });
    } catch (err){
        console.error("connection_pool GET Error / " + err);
        res.status(500).send("message: Internal Server Error");
    }
});

app.listen(port, function() {
    console.log('Server running [' + port + ']');
})