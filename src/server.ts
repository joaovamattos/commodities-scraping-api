import express from "express";
import cors from "cors";
import swaggerUI from "swagger-ui-express";

import routes from "./routes";
import { swaggerDocument } from "../swagger";

const app = express();
app.use(cors());
app.use(routes);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

const port = process.env.PORT || 3333;
app.listen(port);
