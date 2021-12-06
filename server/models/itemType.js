const { Schema, model } = require('mongoose');


const itemTypeSchema = new Schema(
    {
        itemType: {
            type: String,
            trim: true,
            required: true,
        },        
        Organic: {
            type: Number,
            trim: true,
            required: true,
        },
        Local: {
            type: String,
            trim: true,
            required: true,
        },
        Farm: {
            type: String,
            trim: true,
            required: true,
        },
        plu: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'masterItem'
        }
    }
);

const itemType = model('itemType', itemTypeSchema);

module.exports = itemType