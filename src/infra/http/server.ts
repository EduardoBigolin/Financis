import express from "express";
import routes from "./routes";

class Server {
  private app = express();
  constructor(port: number) {
    this.middleware();
    this.routes();
    this.app.listen(port, () => {
      console.log(`[HTTP] Server is listen in http://localhost:${port} `);
    });
  }
  middleware() {
    this.app.use(express.json());
  }
  routes() {
    this.app.use(routes);
  }
}
export default Server;
