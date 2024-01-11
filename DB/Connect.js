import mongoose from "mongoose";
const db = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://kat369:Kathiravan1995@project-m-tool.xjuxrpd.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Db connection established.");
  } catch (error) {
    console.log("DB Error: ", error);
  }
};
export default db;