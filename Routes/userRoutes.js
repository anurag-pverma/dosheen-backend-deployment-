import { Router } from "express";

import * as  userController from  "../Controller/userController.js"
const router = Router();
router.get("/", userController.getdata)
router.post("/", userController.createData);


export  default router;