import mongoose from 'mongoose';

const MyDataSchema = new mongoose.Schema({
  name: String,
  value: Number,
});

export default mongoose.models.MyData || mongoose.model('MyData', MyDataSchema);
