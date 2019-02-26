import { Guid } from "guid-typescript";

export interface Medicamento{
    guid: string,
    id: number,
    nomeMedicamento: string,
    tipoMedicamento: TipoMedicamento,
    dataCadastro: Date,
    observacao:string,
    cadastroCompleto: boolean,
    ativo: boolean,
    quantidadeEstoqueCritico: number,
    nomeAnvisa:string,
    principioAtivo: PrincipioAtivo,
    unidadeMedida: UnidadeMedida,
    viaAdministracao: ViaAdministracao
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
    quantidadeEstoque: number,
    vencimento: Date,
    procedencia: string
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
    
    guid: string;
    nomeMedicamento: string;
    tipoMedicamento: TipoMedicamento;
    observacao:string;
    cadastroCompleto: boolean;
    ativo: boolean;
    quantidadeEstoqueCritico: number;
    nomeAnvisa: string;
    principioAtivo: PrincipioAtivo;
    viaAdministracao: ViaAdministracao;
    unidadeMedida: UnidadeMedida;
    
}

export class ViaAdministracao{
    idViaAdministracao: number;
}

export class TipoMedicamento{
    idTipoMedicamento:number;
}


export class UnidadeMedida{
    idUnidadeMedida: number;
 
}


export class PrincipioAtivo{
    idPrincipioAtivo: number;
}