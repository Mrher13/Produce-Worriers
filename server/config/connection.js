const mongoose = require('mongoose');

mongoose.connect(
<<<<<<< HEAD
  process.env.MONGODB_URI || 'mongodb://localhost/inventory-db',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
=======
  process.env.MONGODB_URI || 'mongodb://localhost/inventory-db',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
>>>>>>> main
