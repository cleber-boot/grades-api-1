export default (mongoose) => {
  const gradeSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
      min: 0,
    
    },
    lastModified
: {
      type: String,
      required: true,
    },
  });

  const Grade = mongoose.model('grade', accountSchema, 'grade');

  return Grade;
};