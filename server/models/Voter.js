import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const VoterSchema = new Schema({
  name: { type: 'String', required: true },
  voted: { type: 'boolean', required: true }
});

export default mongoose.model('Voter', VoterSchema);
