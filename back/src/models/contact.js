import mongoose, { Schema } from 'mongoose';

const contactSchema = new Schema({
    name: String,
    address: String,
    email: String,
    phone: String,
});

/*
locationSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
});
 */

export default mongoose.model('Contact', contactSchema);
