import mongoose from "mongoose";

const Connection = async (URL) => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (err) {
    console.log("Error while connecting to mongoDB", err);
  }
};
export default Connection;
