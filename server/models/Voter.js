import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const voterSchema = new Schema(
  {
    name: { type: 'String', required: true },
    voted: { type: 'boolean', required: true }
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

/*voterSchema.virtual('votes', {
  ref: 'Vote',
  localField: '_id',
  foreignField: 'voter'
});*/

export default mongoose.model('Voter', voterSchema);
