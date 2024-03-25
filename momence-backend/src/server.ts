import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();
const port = 3000;
app.use(cors({ origin: `http://localhost:${port}` }))

app.get("/", cors(), (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

