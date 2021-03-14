import * as express from 'express';
import { Router } from 'express-serve-static-core';
import userControllers from '../controllers/user';
import authenticatedMiddleware from '../middleware/authenticated';

const userRoutes = (function buildRouter() {
  const router: Router = express.Router();
  // all prefixed with 'me' or some such 
  router.get("/sign-in")
  router.get("/", authenticatedMiddleware.authenticate, userControllers.getProfile);
  router.get("/characters");
  router.get("/characters/:characterId");
  router.get("/campaigns");
  router.get("/campaigns/:campaignId");
  router.get("/encounters");
  router.get("/encounters/:encounterId");
  router.get("/friends");
  router.get("/friends/:friendId");

  return router;
})();

export default userRoutes;

