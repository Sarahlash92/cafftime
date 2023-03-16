import mongoose from 'mongoose';
require('dotenv').config();

const dbName = process.env.DB_TEST || 'cafftme_test';
const db_url = process.env.DB_URL || 'mongodb://127.0.0.1:27017/';

mongoose
  .connect(`${db_url}${dbName}` )
  .then(() => console.log(`DB Connected to : ${dbName}`))
  .catch((e) => console.log("connection failed", e));

export default mongoose;

