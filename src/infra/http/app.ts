import "dotenv/config";
import Server from "./server";

const PORT = process.env.SERVER_PORT || 3000;
new Server(PORT as number);
