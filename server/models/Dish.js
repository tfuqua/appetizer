import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const dishSchema = new Schema(
  {
    title: { type: 'String', required: true },
    description: { type: 'String', required: true },
    image: { type: 'String', required: false }
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
