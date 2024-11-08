import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import {
  allCoupons,
  applyDiscount,
  createCoupon,
  deleteCoupon,
  createPayment,
  validatePayment
} from "../controllers/payment.js";

const app = express.Router();

// * razorpay 
app.post("/create", createPayment);
app.post("/validate",validatePayment);
// * creating discount
app.get("/discount", applyDiscount);

// * creating coupon
app.post("/coupon/new",adminOnly, createCoupon);

// * geet all coupon
app.get("/coupon/all", adminOnly,allCoupons);

// * delete coupon
app.delete("/coupon/:id", adminOnly,deleteCoupon);

export default app;
