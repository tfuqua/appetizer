import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  img: { data: Buffer, contentType: String },
  dish: { type: Schema.Types.ObjectId, ref: 'Dish' }
});

export default mongoose.model('Image', ImageSchema);
