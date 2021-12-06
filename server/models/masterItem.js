const { Schema, model } = require('mongoose');



const masterItemSchema = new Schema(
    {
        item: {
            type: String,
            trim: true,
            required: true,
        },
        itemCategory: {
            type: Number,
            trim: true,
            required: true,
        },
        itemType: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'itemType',
        },
        plu: {
            type: Number,
            trim: true,
            required: true,
        },
        Organic: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'itemType',
        },
        Local: {
            ttype: Schema.Types.ObjectId,
            required: true,
            ref: 'itemType'
        },
        Farm: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'itemType'
        },
        unitValue: {
            type: String,
            trim: true,
            required: true,
        },
        category: {
            type: String,
            trim: true,
            required: true,
        },
        retail: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'itemType',
        },
        cost: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'itemType',
        },
        onOrder: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'itemType',
        },
        quantityOnHand: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'itemType',
        },

    },

);

const item = model('masterItem', masterItemSchema);

model.exports = item;