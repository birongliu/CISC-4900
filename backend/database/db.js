// Using ES6 imports
import mongoose from 'mongoose';

(async () => await mongoose.connect('mongodb://localhost:27017')
     .then(() => console.log('Connected!')))();
  