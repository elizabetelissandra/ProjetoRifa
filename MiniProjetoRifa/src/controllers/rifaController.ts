import { Request, Response } from "express";
import { RifaRepository } from "../repositories/RifaRepository";
import { RifaService } from "../services/RifaService";
import { db } from "../database/database";
import { ObjectId } from "mongodb";

const  rifaRepository = new RifaRepository(db);
const  rifaService = new RifaService(rifaRepository);

export async function novaRifaController(req:Request, res: Response) {
    const { titulo, valorMinimo, valorMaximo } = req.body
    
    const rifa = await rifaService.criarRifa({titulo, valorMinimo, valorMaximo})
    
    res.status(201).send(rifa)
    
}

export async function gerarNumeroController(req:Request, res:Response){
    const { id } = req.params;

    const numeroGerado = await rifaService.gerarNumero(id);

    res.status(200).send({rifa: numeroGerado});
  }

  export async function verNumeroSorteado(req:Request,res:Response){
      const { id } = req.params;

      const numeroGerado = await rifaService.numeroSorteado(id);

      
        res.status(200).send({rifa: numeroGerado});
  }

  export async function listarTodasAsRifas(req:Request, res:Response) {
      
      try{
        const rifas = await rifaService.listarTodasAsRifas()
        console.log('testando controller', rifas)
        res.status(200).send({rifas})
          }catch (error) {
              console.log(error)
              res.status(400).json({message : error })
          }
          
  }