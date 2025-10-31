import dotenv from "dotenv";
import { connectDB } from "./config/database";
import { createApp } from "./app";

dotenv.config();

const startServer = async () => {
  await connectDB();

  const app = await createApp();

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server ready at http://localhost:${PORT}/graphql`);
  });
};

startServer();
