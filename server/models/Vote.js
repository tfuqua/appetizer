import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const VoteSchema = new Schema({
  taste: { type: Number, required: true, min: 0, max: 5 },
  originality: { type: Number, required: true, min: 0, max: 5 },
  presentation: { type: Number, required: true, min: 0, max: 5 },
  voter: { type: Schema.Types.ObjectId, ref: 'Voter' },
  dish: { type: Schema.Types.ObjectId, ref: 'Dish' }
});

export default mongoose.model('Vote', VoteSchema);
