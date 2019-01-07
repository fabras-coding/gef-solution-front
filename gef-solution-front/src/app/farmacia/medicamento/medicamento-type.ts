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
    idTipoMedicamento:number,
    nomeTipoMedicamento:string,
    ativo: boolean
}

export interface PrincipioAtivo{
    id:number,
    nome:string
}

export interface Estoque{
    id:number,
    medicamento: Medicamento,
    quantidade: number,
    vencimento: Date
}

export interface ViaAdministracao{
    idViaAdministracao: number,
    descricaoViaAdministracao: string
}

export interface UnidadeMedida{
    idUnidadeMedida: number,
    descricaoUnidadeMedida: string
}


export class MedicamentoCad{
    id: number;
    nomeMedicamento: string;
    idTipo: number;
    observacao:string;
    quantidadeEstoqueCritico: number;
    idViaAdministracao: number;
    idUnidadeMedida:number;
    idPrincipioAtivo:number;
    
}

export class ViaAdministracao{
    idViaAdministracao: number;
    
}