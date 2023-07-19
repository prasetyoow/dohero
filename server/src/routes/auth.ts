import { Router } from "express";
const router: Router = Router();

// Validator
// import validation from "./validator/auth"
// import { body } from "express-validator";
// import bcrypt from "bcrypt";

// Register Validation
// const authRegisValid = [
//   body("email").isEmail().withMessage("Email format invalid"),
//   body("username")
//     .isLength({ min: 4 })
//     .withMessage("Username length must be atleast 4 characters"),
//   body("password")
//     .isLength({ min: 8 })
//     .withMessage("Password length must be atleast 8 characters")
//     .customSanitizer(async (val: string) => {
//       const hash = await bcrypt.hash(val, 10);
//       return hash;
//     }),
// ];

// const authLoginValid = [
//   body("email").isEmail().withMessage("Email format invalid"),
// ];

// Authentication Route
router.post("auth/register");

export default router;
