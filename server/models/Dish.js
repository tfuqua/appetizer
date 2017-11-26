import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const DishSchema = new Schema({
  title: { type: 'String', required: true },
  description: { type: 'String', required: true }
  //votes: {}
});

export default mongoose.model('Dish', DishSchema);
