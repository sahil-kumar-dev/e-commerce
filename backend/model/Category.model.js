const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
    label: { 
        type: String, 
        required: true, 
        unique: true 
    },
    value: { 
        type: String, 
        required: true, 
        unique: true 
    },
});

categorySchema.virtual('id').get(function () {
    return this._id.toHexString();
});

categorySchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        return ret;
    },
});

exports.Category = mongoose.model('Category', categorySchema);