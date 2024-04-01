import { Router } from "express";
import { gerarNumeroController, listarTodasAsRifas, novaRifaController, verNumeroSorteado } from "../controllers/rifaController";

const router = Router()

router.post("/", novaRifaController)
router.patch("/:id", gerarNumeroController)
router.get("/:id", verNumeroSorteado) 
router.get( "/", listarTodasAsRifas)

export default router