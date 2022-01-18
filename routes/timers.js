import express from "express";
const router = express.Router();
import {getAllTimers} from "../models/timers.js";

/* GET users listing. */
router.get("/", async function (req, res, next) {
 const data = await getAllTimers();
 res.json({
  success: true,
  message: `time working`,
  payload: searchResults,
});
return;
});

export default router;
