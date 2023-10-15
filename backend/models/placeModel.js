const {Schema, model} = require('../connection');
const myschema = new Schema({
    title: String,
    location : String,
    description : String,
    image : String
});
module.exports = model('place', myschema);