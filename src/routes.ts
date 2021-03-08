import { Router, Request, Response } from "express";

import { getValue } from "./scraping";

const routes = Router();

routes.get("/", async (req: Request, res: Response) => {
  return res.redirect("/docs");
});

routes.get("/commodity/:commodity", async (req: Request, res: Response) => {
  const data = await getValue(req.params.commodity);

  return res.json(data);
});

export default routes;
