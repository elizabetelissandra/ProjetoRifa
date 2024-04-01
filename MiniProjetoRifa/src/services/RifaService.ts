import { IRifa, IRifaDTO } from "../entities/Rifa";
import { RifaRepository } from "../repositories/RifaRepository";

export class RifaService {
  private rifaRepository: RifaRepository;
  constructor(
    repository: RifaRepository
  ) {
    this.rifaRepository = repository;
  }
  async criarRifa(rifaData: IRifaDTO): Promise<IRifa> {
    return await this.rifaRepository.criarRifa({
      titulo: rifaData.titulo,
      valorMinimo: rifaData.valorMinimo,
      valorMaximo: rifaData.valorMaximo,
      valorGerado: 0,
      dataCriacao: new Date()
    });
  }
  async gerarNumero(id: string) {
    const valorGerado = await this.rifaRepository.gerarNumeroAleatorio(id);
    return valorGerado;
    }
    
  async numeroSorteado(id:string){
    return await this.rifaRepository.consultarValorSorteado(id)
  }

  async listarTodasAsRifas(){
    const todasRifas = this.rifaRepository.consultarTodasRifas();
    return todasRifas
  }
}
