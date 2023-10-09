const mongoose = require('mongoose');
const url ="mongodb+srv://khushi353:cXKfX47UexsP6gU@cluster0.bwxp2qu.mongodb.net/mydatabases?retryWrites=true&w=majority";
mongoose.connect(url)                     
.then((result) => {                        
    console.log('database connected');
}).catch((err) => {
    console.log(err);
});
module.exports = mongoose;