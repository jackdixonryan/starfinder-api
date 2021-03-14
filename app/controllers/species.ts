import { Request, Response } from "express-serve-static-core";
import { Species } from "../interfaces";

const userControllers = (function buildControllers() {
  "use strict";
  return {
    // admin function
    async postSpecies(req: Request, res: Response) {
      const { body } = req;
      const { species } = body;
      const speciesObject: Species = JSON.parse(species);
      // db method;
      
      // res.
    },
  }
})();

export default userControllers;