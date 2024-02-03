import { Router } from "express";

import auth from "./auth.js"
import * as fileHandler from "./request-handler.js";






const router = Router();

router.route("/register").post(fileHandler.register);
router.route("/login").post(fileHandler.login);
router.route("/upload").post(fileHandler.uploadPic);

router.route("/get-private-data").get(auth,fileHandler.getPrivateData);




export default router; 