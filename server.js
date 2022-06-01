import express from "express";
import cors from "cors";
import PersonajeRouter from "./src/controllers/personajeController.js";
import PelOserRouter from "./src/controllers/pelOserController.js";
import PerPelOserRouter from "./src/controllers/perPelOserController.js";
import TokenRouter from "./src/controllers/tokenController.js";
import passport from "passport";
import { jwtStrategy } from "./src/common/jwt.strategy.js";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
passport.use(jwtStrategy);
app.use(passport.initialize());

app.use("/personaje", PersonajeRouter);
app.use("/token", TokenRouter);
app.use("/pelOser", PelOserRouter);
app.use("/perPelOser", PerPelOserRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});