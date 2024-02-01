import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.json({message: "Hello, World, this is Valletta Development Software"});
})

app.listen(3000, '::');
