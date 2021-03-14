import { Request, Response } from "express-serve-static-core";

const userControllers = (function buildControllers() {
  "use strict";
  return {
    async getProfile(req: Request, res: Response) {
      const profile: Object = {
        name: "myUsername"
      }
      res.json(profile);
    },
  }
})();

export default userControllers;