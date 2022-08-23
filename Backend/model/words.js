const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Words = new Schema({
    text: {
        type: String
    }
}, {
    collection: 'words'
})
module.exports = mongoose.model('Words', Words)