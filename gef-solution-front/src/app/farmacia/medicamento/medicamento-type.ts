export interface Medicamento{
    id: number,
    nomeMedicamento: string,
    tipoMedicamento: TipoMedicamento,
    dataCadastro: Date,
    observacao:string,
    cadastroCompleto: boolean,
    ativo: boolean,
    quantidadeEstoqueCritico: number,
    nomeAnvisa:string,
    principioAtivo: PrincipioAtivo
}

export interface TipoMedicamento{
    id:number,
    nome:string,
    ativo: boolean
}

export interface PrincipioAtivo{
    id:number,
    nome:string
}