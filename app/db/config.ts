import * as mongo from "mongodb";

const config = (function buildConfig() {
  "use strict";

  const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.qjydt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
  const client = new mongo.MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return {
    async connect() {
      await client.connect();
    },
    async disconnect() {
      await client.close();
    }
  }
})();

export default config;
