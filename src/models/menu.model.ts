import {Schema, model} from "mongoose"

const schema = new Schema({
    name:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
        index: true
    },
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true })

const Menu = model('Menu', schema)

export default Menu