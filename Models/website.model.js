import mongoose from "mongoose";
const WebsiteSchema = new mongoose.Schema(
  {
    image: {
      type: String,
    },
    buttontext: {
        type: String,
      },
  },
  {
    timestamps: true,
   
  }
);

const Websitedata = mongoose.model("digilabsdata", WebsiteSchema );

export default Websitedata;