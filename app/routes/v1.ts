import * as express from 'express';
import { Router } from 'express-serve-static-core';
import authenticationController from '../controllers/authentication.controller';

const v1Router = (function buildRouter() {
  const router: Router = express.Router();

  // one unified route file, telling us Everyone about the routes. Let's give it a try.
  // base routes
  router.get("/");
  router.get("/info");
  router.get("/users/:userId");

  // admin routes
  router.get("/users");
  // registration route.
  router.post("/users", authenticationController.register);
  router.patch("/users/:userId");
  router.delete("/users/:userId");

  // here on down is only Starfinder related stuff.
  // all the boring ass app stuff is above these lines
  // yawn
  
  // species 
  router.get('/species');
  router.post('/species');
  router.delete("/species/:speciesId");
  router.patch("/species/:speciesId");
  router.get("/species/:speciesId");
  
  // themes
  router.get("/themes");
  router.post("/themes");
  router.delete("/themes/:themeId");
  router.patch("/themes/:themeId");
  router.get("/themes/:themeId");

  // classes 
  router.get("/classes");
  router.post("/classes");
  router.delete("/classes/:classId");
  router.patch("/classes/:classId");
  router.get("/classes/:classId");

  // feats
  router.get("/feats");
  router.post("/feats");
  router.delete("/feats/:featId");
  router.patch("/feats/:featId");
  router.get("/feats/:featId");

  // items
  router.get("/items");
  router.post("/items");
  router.delete("/items/:itemId");
  router.patch("/items/:itemId");
  router.get("/items/:itemId");

  // spells
  router.get("/spells");
  router.post("/spells");
  router.delete("/spells/:spellId");
  router.patch("/spells/:spellId");
  router.get("/spells/:spellId");

  return router;
})();

export default v1Router;

