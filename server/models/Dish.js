import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const dishSchema = new Schema(
  {
    number: { type: Number, required: true },
    title: { type: 'String', required: true },
    description: { type: 'String', required: true }
  },
  {
    toObject: {
      virtuals: true
    },
    toJSON: {
      virtuals: true
    }
  }
);

dishSchema.virtual('votes', {
  ref: 'Vote',
  localField: '_id',
  foreignField: 'dish'
});

export default mongoose.model('Dish', dishSchema);
