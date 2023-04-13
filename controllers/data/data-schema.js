import mongoose from 'mongoose';
const schema = mongoose.Schema({
  username: String,
    link: String,
    data: String,
    time: Date
}, {collection: 'logs'});
export default schema;