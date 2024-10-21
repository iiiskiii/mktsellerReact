const express = require('express');
const app = express;
const PORT = process.env.PORT || 30008; 
const db = require('./config/db');
app.use(express.json());

// 브라우저의 요청을 받기 위해 사용합니다.
const cors = require("cors");
app.use(cors());

const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

// app.get('/',(req,res)=>{
//     console.log('메인');
// });

// app.get('/data',(req,res)=>{
//     console.log('데이터접속');
//     db.query('SELECT * FROM g5_member', (err, data) => {
//         if(!err){
//             //console.log(data);
//             res.send(data);
//         }else{
//             console.log(err);
//         }
//     });
// });

// app.listen(PORT, ()=>{
//     console.log(`Server On : http://localhost:${PORT}`);
// });

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log(`Server On : http://localhost:${PORT}`);
    });
});