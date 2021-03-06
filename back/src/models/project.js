/**
 * Модель данных в коллекции "Портфолио"
 */
import mongoose, { Schema } from 'mongoose';

const projectSchema = new Schema({
    slug: String,
    title: String,
    client: String,
    image: String,
    text: String,
    date: Date,
    serviceId: { type: Schema.Types.ObjectId, ref: 'Service' },
});

projectSchema.options.toJSON = {
    transform: function(doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
    }
};

/*
locationSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
});
 */

export default mongoose.model('Project', projectSchema);
