import express from "express";
const router = express.Router();
import { getAllQuotes } from "../models/quotes.js";

/* GET quotes listing. */
router.get("/", async function (req, res, next) {
   const data = await getAllQuotes();
   console.log(data);
   res.json({
      success: true,
      message: `quotes working`,
      payload: data,

      
   });
   return;
   
});

export default router;
