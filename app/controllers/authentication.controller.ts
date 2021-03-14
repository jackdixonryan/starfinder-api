import { Request, Response } from "express-serve-static-core";
import auth from "../services/auth.service";

const authenticationController = (function buildController() {
  "use strict";
  return {
    async register(req: Request, res: Response) {
      const { body } = req;
      const { user } = body;
      const { password, ...userFields } = user;
      const token = auth.register(password, userFields);
      res.send(token);
    }
  }
})();

export default authenticationController;