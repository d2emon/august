/**
 * Модель данных в коллекции "Статистика"
 */
import mongoose, { Schema } from 'mongoose';

const statSchema = new Schema({
    date: Date,
    ip: String,
    userAgent: String,
    isMobile: String,
    referrer: String,
    platform: String,
    page: String,
    height: Number,
    width: Number,
});

statSchema.options.toJSON = {
    transform: function(doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
    }
};

export default mongoose.model('Stat', statSchema);
