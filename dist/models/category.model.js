import { Schema, model } from "mongoose";
const schema = new Schema({
    name: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true });
const Category = model('Category', schema);
export default Category;
