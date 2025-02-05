import dotenv from "dotenv";
import express from "express";
import { startApolloServer } from "./apollo/apolloServer";
import { dbConnect } from "./config/dbConnect";
dotenv.config({ path: "config/.env.local" });

const app = express();

app.use(express.json());

dbConnect();

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 4000;
async function startServer() {
  await startApolloServer(app);
  app.listen(PORT, () => {
    console.log(
      `Server is running on port ${PORT} at http://localhost:${PORT}`
    );
  });
}

startServer();
