import { Router, Request, Response } from "express";

import { getValue } from "./scraping";

const routes = Router();

routes.get("/", async (req: Request, res: Response) => {
  return res.redirect("/docs");
});

routes.get("/ouro", async (req: Request, res: Response) => {
  const value = await getValue("ouro");
  return res.json({ value });
});

routes.get("/petroleo", async (req: Request, res: Response) => {
  const value = await getValue("petroleo");
  return res.json({ value });
});

routes.get("/cafe", async (req: Request, res: Response) => {
  const value = await getValue("cafe");
  return res.json({ value });
});

routes.get("/milho", async (req: Request, res: Response) => {
  const value = await getValue("milho");
  return res.json({ value });
});

routes.get("/boi", async (req: Request, res: Response) => {
  const value = await getValue("boi");
  return res.json({ value });
});

routes.get("/soja", async (req: Request, res: Response) => {
  const value = await getValue("soja");
  return res.json({ value });
});

routes.get("/ovo", async (req: Request, res: Response) => {
  const value = await getValue("ovo");
  return res.json({ value });
});

export default routes;
