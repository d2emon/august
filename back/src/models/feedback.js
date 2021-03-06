/**
 * Модель данных в коллекции "Обратная связь"
 */
import mongoose, { Schema } from 'mongoose';

const feedbackSchema = new Schema({
    email: String,
});

feedbackSchema.options.toJSON = {
    transform: function(doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
    }
};

export default mongoose.model('FeedbackToken', feedbackSchema);
