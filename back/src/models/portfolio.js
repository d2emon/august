import mongoose, { Schema } from 'mongoose';

const portfolioSchema = new Schema({
    title: String,
    short: String,
    image: String,
    description: String,
    date: Date,
    isVisible: Boolean,
    viewed: Number,
    serviceId: Schema.Types.ObjectId,
});

/*
locationSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
});
 */

export default mongoose.model('Portfolio', portfolioSchema);
