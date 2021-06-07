import mongoose, { Schema } from 'mongoose';

const articleSchema = new Schema({
    slug: String,
    title: String,
    text: String,
    date: Date,
    // isVisible: Boolean,
    viewed: Number,
    categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
});

articleSchema.options.toJSON = {
    transform: function(doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
    }
};

export default mongoose.model('Article', articleSchema);
