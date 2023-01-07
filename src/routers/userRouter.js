import express from "express";
const router = express.Router();

//create user router
router.post("/", (req, res, next) => {
  try {
    const user = req.body;
    console.log(user);
    res.json({
      status: "success",
      message: "User created successfully, you may login now",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
