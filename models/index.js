import mongoose from 'mongoose';

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;
db.grade = gradeModel(mongoose);

export { db };
