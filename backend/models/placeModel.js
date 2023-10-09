const {Schema, model} = require('../connection');
const myschema = new Schema({
    title: String,
    location : String,
    description : String,
    img : String
});
module.exports = model('place', myschema);