import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    minlength: [1, 'at least 1 symbol']
  },
  mark: String,
  created_at: {
    type: Date,
    immutable: true, // immutable true - after creating data can`t be changed
    default: () => Date.now()
  },
  /* do_by: {
    type: Date,
    default: () => Date.
  }, */
  completed: {
    type: Boolean,
    default: false,
    required: true
  },
  comment: String
})

export default mongoose.model('Task', TaskSchema);