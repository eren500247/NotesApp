const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    // Check if already connected or in the process of connecting
    if (mongoose.connection.readyState >= 1) {
      console.log("Using existing database connection.");
      return;
    }

    // Connection string from environment variable (preferable in production)
    const dbURI = process.env.MONGO_URI; // Fallback for local dev

    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
};

module.exports = connectDb;