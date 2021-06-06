import mongoose, { Schema } from 'mongoose';

const serviceSchema = new Schema({
    slug: String,
    title: String,
    image: String,
    // projects: Array,
    text: String,
});

serviceSchema.options.toJSON = {
    transform: function(doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
    }
};

export default mongoose.model('Service', serviceSchema);
