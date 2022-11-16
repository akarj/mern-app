const User = require("../models/User");
const router = require("express").Router();

// Create a user
router.post("/", async (req, res) => {
   const newUser = new User(req.body);
   try {
      const savedUser = await newUser.save();
      res.status(200).json(savedUser);
   } catch (err) {
      res.status(500).json(err);
   }
});

// //update a user
router.put("/:id", async (req, res) => {
   try {
      const user = await User.findById(req.params.id);
      await user.updateOne({ $set: req.body });
      res.status(200).json("the user has been updated");
   } catch (err) {
      res.status(500).json(err);
   }
});

// Deleting a user
router.delete("/:id", async (req, res) => {
   try {
      const user = await User.findById(req.params.id);
      if (user.userId === req.body.userId) {
         await user.deleteOne();
         res.status(200).json("the user has been deleted");
      } else {
         res.status(403).json("you can delete only your user");
      }
   } catch (err) {
      res.status(500).json(err);
   }
});


//get a user
router.get("/:id", async (req, res) => {
   try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
   } catch (err) {
      res.status(500).json(err);
   }
});


module.exports = router;