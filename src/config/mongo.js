
const mongoose = require('mongoose');

const DB_URI = process.env.DB_URI

const dbConnect = ()=>{
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, res)=>{
        if(!err){
            console.log('\n###### DB CONNECT ######');
        } else {
            console.log('###### DB ERROR!!!! ######')
        }
    });
}


module.exports = dbConnect;