import { Router } from "express";
import {
  renderAddDesign,
  renderCart,
  renderChat,
  renderDesigns,
  renderIndex,
  renderLogin,
  renderProfile,
  renderSignin,
} from "../Controller/web.controller.js";
import { authenticate } from "../middlewares/authenticate.js";
import { authorize } from "../middlewares/authorize.js";

const webRouter = Router();

webRouter.get("/", renderIndex);
webRouter.get("/signin", renderSignin);
webRouter.get("/login", renderLogin);
webRouter.get("/profile", renderProfile);
webRouter.get("/designs", renderDesigns);
webRouter.get("/cart", renderCart);
webRouter.get("/designs/:pid");
webRouter.get("/cart/:cid");
webRouter.get("/chat", authenticate("authJWT"), authorize("user"), renderChat);
webRouter.get("/addDesign", authenticate("authJWT"), authorize("admin"), renderAddDesign);
webRouter.get("/purchase")

//rutas vistas autenticacion

export { webRouter };
