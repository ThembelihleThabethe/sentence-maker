const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Sentence = new Schema({
    text: {
        textString: String
    }
}, {
    collection: 'sentences'
})
module.exports = mongoose.model('Sentence', Sentence)