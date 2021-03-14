import { Request, Response, NextFunction } from "express-serve-static-core";
import * as jwt from "jsonwebtoken";

const authenticatedMiddleware = (function buildMiddleware() {
  "use strict";

  return {
    async authenticate(req: Request, res: Response, next: NextFunction) {
      const { headers } = req;
      try {
        const { authorization } = headers;
        const token = authorization.split(" ")[1];
        jwt.verify(token, "somerandomasssecret", (err, decoded: any) => {
          if (err) {
            return res.status(500).send({ auth: false, message: "Authentication failure." });
          } else {
            headers.id = decoded.id;
            next();
          }
        });
      } catch (error) {
        res.status(401).send({ message: "no auth" });
      }
    }
  }
})();

export default authenticatedMiddleware;