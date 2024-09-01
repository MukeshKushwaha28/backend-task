import mongoose from "mongoose";

const connectDB = async () => {
  const url = process.env.MONGODB_URL
  try {
    const conn = await mongoose.connect(url);
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`);
  }
};

export default connectDB;
