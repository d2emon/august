import mongoose, { Schema } from 'mongoose';

const projectSchema = new Schema({
    slug: String,
    title: String,
    //short: String,
    image: String,
    text: String,
    date: Date,
    // isVisible: Boolean,
    // viewed: Number,
    serviceId: Schema.Types.ObjectId,
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
