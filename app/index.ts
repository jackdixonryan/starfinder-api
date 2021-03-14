import * as express from "express";
import * as morgan from "morgan";
import * as apicache from "apicache";
import userRoutes from "./routes/user";
import v1Routes from "./routes/v1";

(function startServer() {
  const port = process.env.PORT || 1234;
  const app = express();
  const logger = morgan("dev");
  const cache = apicache.middleware;
  app.use(cache('5 minutes'));
  app.use(express.json());
  app.use(logger);

  app.use('/me', userRoutes);
  app.use('/v1', v1Routes);

  app.listen(1234, () => {
    console.log(`Starfinder API listening on PORT ${port}`)
  });
})();
