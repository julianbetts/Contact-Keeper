const { Schema, model } = require('mongoose');

const contactSchema = new Schema({
  contactName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },  
  contactPhone: {
    type: String,
    trim: true,
  },
  contactEmail: {
    type: String,
    trim: true,
  },
  notes: [
    {
      notesText: {
        type: String,
        trim: true,
      },
    },
  ],
});

const Contact = model('Contact', contactSchema);

module.exports = Contact;
