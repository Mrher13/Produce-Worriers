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
            type: Number,
            trim: true,
            required: true,
        },
        retail: {
            type: Number,
            required: true,
        },
        cost: {
            type: Number,
            required: true,
        },
        onOrder: {
            type: Number,
        },
        quantityOnHand: {
            type: Number,
            required: true,
        },
    }
);

const itemType = model('itemType', itemTypeSchema);

module.exports = itemType