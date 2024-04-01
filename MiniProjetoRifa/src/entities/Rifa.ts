export interface IRifa{
    _id:string,
    titulo: string,
    valorMinimo: number,
    valorMaximo: number,
    valorGerado: number,
    dataCriacao: Date
}

export interface IRifaDTO{
    titulo: string,
    valorMinimo: number,
    valorMaximo: number
}

