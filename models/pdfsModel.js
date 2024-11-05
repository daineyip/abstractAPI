const mongoose = require('mongoose');

const pdfSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('PDF', pdfSchema);