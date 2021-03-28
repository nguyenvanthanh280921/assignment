import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        strim: true,
        maxlength: 32,
        required: true
    }
},

    {
        timestamops: true
    });

module.exports = mongoose.model("Category", categorySchema)