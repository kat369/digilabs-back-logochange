const router = express.Router();
import digilabsdata from "../Models/website.model.js";
import express from "express";


router.put('/newlogo', async (req, res) => {
    const {base64} = req.body;
    console.log(req.body)
   
    try {

        let data = await digilabsdata.findByIdAndUpdate({_id: "659f084ad206624aa21b5d16"},
            { $set: { image: base64 } }
        );
        res.status(200).send({
            message: "success"
        })
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error"
        })
    }
});
router.put('/newtext', async (req, res) => {
    const {text} = req.body;
    console.log(req.body)
   
    try {

        let data = await digilabsdata.findByIdAndUpdate({_id: "659f084ad206624aa21b5d16"},
            { $set: { buttontext: text } }
        );
        res.status(200).send({
            message: "success"
        })
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error"
        })
    }
});


router.post("/newdata", async (req, res) => {
    try {
        let data = await new digilabsdata({ ...req.body }).save();
        res.status(201).send({ data: data, message: "data has been added successfully." });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Internal Server Error",
            data: error,
        });
    }
});



router.get("/webdata", async (req, res) => {
    try {
        await digilabsdata.find({}).then((data) => {
            res.status(200).send(data);
          });
        } catch (error) {
          console.log(error);
          res.status(500).send({ message: "Internal Server Error", error });
        }
});


export default router;