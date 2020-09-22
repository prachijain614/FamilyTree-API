var router = require("express").Router();
import asyncMiddleware from "./../../../middlewares/asyncMiddleware";
import controller from "./controller";

router.post("/add",  asyncMiddleware(controller.addFamily));

router.get( "/get", asyncMiddleware(controller.getFamilies));

router.put( "/delete", asyncMiddleware(controller.deleteFamily));

router.post( "/members/add", asyncMiddleware(controller.addMember));

router.post( "/members/get", asyncMiddleware(controller.getMemberList));

module.exports = router;
