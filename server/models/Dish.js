import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const dishSchema = new Schema(
  {
    number: { type: Number, required: true },
    title: { type: 'String', required: true },
    description: { type: 'String', required: true },
    votes: [{ type: Schema.Types.ObjectId, ref: 'Vote' }]
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

export default mongoose.model('Dish', dishSchema);
