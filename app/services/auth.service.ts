// LETS ROLL OUR OWN AUTH! COME ON, IT'LL BE FUN!
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";
import * as uuid from "uuid";

const auth = (function buildAuthModule() {

  "use strict";

  return {
    register(password: string, userInformation: object) {
      const hashedPassword = bcrypt.hashSync(password, 8);
      
      // create user
      // with other shit
      // in the db; 
      const id = uuid.v4();
      const newUser = { password: hashedPassword, id, ...userInformation };
      // should also return a TOKEN for that user. 
      const token = jwt.sign({ id }, "somerandomasssecret", {
        expiresIn: 86400,
      });
      return { token, newUser };
    },
    login(password: string, username: string) {
      // query for username
      const examplePassword = "password";
      const isValidPassword = bcrypt.compareSync(password, examplePassword);
      if (!isValidPassword) {
        return false;
      } else {
        const token = jwt.sign({ id: id }, "somerandomasssecret", {
          expiresIn: 86400
        })
      }
    }
  }
})();

export default auth;