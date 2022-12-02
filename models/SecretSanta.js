const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for todo
const SecretSantaSchema = new Schema({
  action: {
    type: String,
    required: [true, 'The todo text field is required'],
  },
});

// Create model for todo
const SecretSanta = mongoose.model('SecretSanta', SecretSantaSchema);

module.exports = SecretSanta;