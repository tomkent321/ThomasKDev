const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

// app.use(express.static('.'));
app.use(express.static('public'));

app.listen(port, () => console.log(`App listening on port ${port}!`));

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://tomkdev:tomkdev321@cluster0-gcmm6.mongodb.net/thomaskdev?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
      }
    );
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    //Exit process with failure
    process.exit(1);
  }
};

connectDB();
