const express = require('express');
const router = express.Router();
const config = require('config');
const Contact = require('../models/Contact');

// @route   GET api/contacts
// @desc    Get all users contacts
// @access  Private
// router.get('/', async (req, res) => {
//   try {
//     const contacts = await Contact.find({ user: req.user.id }).sort({
//       date: -1
//     });
//     res.json(contacts);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

// @route   POST api/contacts
// @desc    Add new contact
// @access  Private
router.post('/', async (req, res) => {
  const { name, email, phone, message } = req.body;
  console.log(name);
  try {
    const newContact = new Contact({
      name,
      email,
      phone,
      message
    });

    const contact = await newContact.save();
    res.json(contact);
  } catch (err) {
    console.error('err.message');
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/contacts/:id
// @desc    Update a contact
// @access  Private
// router.put('/:id', async (req, res) => {
//   const { name, email, phone, message } = req.body;

//   const contactFields = {};
//   if (name) contactFields.name = name;
//   if (email) contactFields.email = email;
//   if (phone) contactFields.phone = phone;
//   if (message) contactFields.message = message;

//   try {
//     let contact = await Contact.findById(req.params.id);

//     if (!contact) return res.status(404).json({ msg: 'Contact not found' });

//     contact = await Contact.findByIdAndUpdate(
//       req.params.id,
//       { $set: contactFields },
//       { new: true }
//     );

//     res.json(contact);
//   } catch (err) {
//     console.error('err.message');
//     res.status(500).send('Server Error');
//   }
// });

// @route   DELETE api/contacts/:id
// @desc    Delete a contact
// @access  Private
// router.delete('/:id', async (req, res) => {
//   try {
//     let contact = await Contact.findById(req.params.id);
//     if (!contact) return res.status(404).json({ msg: 'Contact not found' });

//     // make sure user owns the contact
//     if (contact.user.toString() !== req.user.id) {
//       return res.status(401).json({ msg: 'Not authorized' });
//     }
//     await Contact.findByIdAndRemove(req.params.id);

//     res.json({ msg: 'Contact removed' });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

module.exports = router;
