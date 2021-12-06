const { Schema, model } = require('mongoose');



const masterItemSchema = new Schema(
    {
        item: {
            type: String,
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
        
    },
    
);

const item = model('masterItem', masterItemSchema);

model.exports = item;