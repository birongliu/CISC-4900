// Using ES6 imports
import mongoose from 'mongoose';

(async () => await mongoose.connect(process.env.MONGODB_URI)
     .then(() => console.log('Connected!')))();
  


     