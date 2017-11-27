import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const VoterSchema = new Schema({
  name: { type: 'String', required: true },
  voted: { type: 'boolean', required: true },
  votes: [{ type: Schema.Types.ObjectId, ref: 'Vote' }]
});

export default mongoose.model('Voter', VoterSchema);
