const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const Contact = require('./models/Contact');

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

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.post('/addContact', (req, res) => {
  // console.log('res', res);
  var myData = new Contact(req.body);
  myData
    .save()

    .then(item => {
      // res.send('Contact saved to database');
      res.redirect('/');
      // res.end();
      // res.render('success')
    })
    .catch(err => {
      res.status(400).send('Unable to save to database');
    });
});
