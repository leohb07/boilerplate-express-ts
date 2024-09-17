import { app } from "./app";
import { env } from "./env";
import { connection } from "./lib/mongoose";

app.listen(env.PORT, async () => {
  console.log("🚀 HTTP Server Running!");
  await connection();
});
