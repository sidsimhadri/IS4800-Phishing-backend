import mongoose from 'mongoose';
import dataSchema from "./data-schema.js"
const dataModel = mongoose
              .model('dataModel', dataSchema);
export default dataModel;