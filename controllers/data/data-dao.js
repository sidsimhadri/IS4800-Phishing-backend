import dataModel from "./data-model.js"
export const findData = () => dataModel.find();
export const createData = (log) => dataModel.create(log);
export const deleteData = (lid) => dataModel.deleteOne({_id: lid});