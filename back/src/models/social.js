import mongoose, { Schema } from 'mongoose';

const socialSchema = new Schema({
    title: String,
    href: String,
    social: String,
});

socialSchema.options.toJSON = {
    transform: function(doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
    }
};

export default mongoose.model('Social', socialSchema);
