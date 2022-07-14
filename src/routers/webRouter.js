import { Router } from "express";
import { isLoggedIn } from "../auth/auth.js";

export const webRouter = Router();

webRouter.get("/", isLoggedIn, (req, res) => {
	console.log("namemin:", req.session.name);
	res.render("index", { name: req.session?.name });
});

webRouter.get("/logout", (req, res) => {
	const name = req.session.name;
	console.log("name:", name);
	req.session.destroy();
	res.render("logout", { name });
});

webRouter.get("*", (req, res) => {
	res.status(404).json({
		error: -2,
		description: `ruta ${req.originalUrl} método get no implementado`,
	});
});