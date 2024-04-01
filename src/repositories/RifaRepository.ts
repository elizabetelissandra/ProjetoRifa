import { Collection, Db, ObjectId } from "mongodb";
import { IRifa } from "../entities/Rifa";

export class RifaRepository {

  rifaCollection: Collection<Omit<IRifa, "_id">>;

  constructor(db: Db) {
    this.rifaCollection = db.collection("rifa");
  }

  async criarRifa(rifaData: Omit<IRifa, "_id">): Promise<IRifa> {
    const rifaCriada = await this.rifaCollection.insertOne(rifaData);
    return {
      _id: rifaCriada.insertedId.toString(),
      ...rifaData
    };
  }

  async gerarNumeroAleatorio(id: string) {
    const rifaSelecionada = await this.rifaCollection.findOne({
      _id: new ObjectId(id)
    });

    if (!rifaSelecionada) {
      console.log("Rifa não encontrada.");
      return;
    }

    const randomNumber =
      Math.floor(
        Math.random() *
          (rifaSelecionada.valorMaximo - rifaSelecionada.valorMinimo + 1)
      ) + rifaSelecionada.valorMinimo;

    const numeroGerado = await this.rifaCollection.updateOne(
      {
        _id: new ObjectId(id)
      },
      {
        $set: {
          valorGerado: randomNumber,
          dataCriacao: new Date()
        }
      }
    );
    
    console.log("Número sorteado:", randomNumber);
    return numeroGerado
  }

  //Consultar o valor gerado da rifa, passando: id

  async consultarValorSorteado(id: string)  {
    const rifa = await this.rifaCollection
      .findOne({ _id: new ObjectId(id) }
      );

      if(rifa){
      const numeroGerado = rifa.valorGerado;
      return  `O número sorteado foi: ${numeroGerado}` 
    }
    
  }

  async consultarTodasRifas() {
      return await this.rifaCollection.find({}).toArray();
  
    }

  }
