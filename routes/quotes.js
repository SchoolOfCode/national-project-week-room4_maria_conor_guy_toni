import express from "express";
const quotesRouter = express.Router();
import { getAllQuotes } from "../models/quotes.js";

/* GET quotes listing. */
quotesRouter.get("/quotes", async function (req, res, next) {
   const data = await getAllQuotes();
   res.json({
      success: true,
      message: `quotes working`,
      payload: data,
   });
   return;
});

export default quotesRouter;
