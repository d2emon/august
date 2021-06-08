/**
 * Модель данных в коллекции "Вики-страницы"
 */
import mongoose, { Schema } from 'mongoose';

const wikiSchema = new Schema({
    slug: String,
    title: String,
    text: String,
});

wikiSchema.options.toJSON = {
    transform: function(doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
    }
};

export default mongoose.model('Wiki', wikiSchema);
