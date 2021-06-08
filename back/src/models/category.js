/**
 * Модель данных в коллекции "Категории"
 */
import mongoose, { Schema } from 'mongoose';

const categorySchema = new Schema({
    slug: String,
    title: String,
});

categorySchema.options.toJSON = {
    transform: function(doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
    }
};

export default mongoose.model('Category', categorySchema);
