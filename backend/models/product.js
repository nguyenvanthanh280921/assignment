import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema;


const productSchema = mongoose.Schema({
    name: {
        type: String,
        strim: true,
        maxlength: 32,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 2000
    },
    price: {
        type: Number
    },
    category: {
        type: ObjectId,
        ref: "Category",
        required: true
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    shipping: {
        required: true,
        type: Boolean
    },
    sold: {
        type: Number,
        default: 0
    }
}, { timestamops: true });

module.exports = mongoose.model("Product", productSchema)