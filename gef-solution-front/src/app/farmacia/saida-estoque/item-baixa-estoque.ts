export class ItemEstoqueBaixa{
    idEstoque: number;
    medicamento: MedicamentoEstoque;
    quantidadeEstoque: number;
    vencimento: string;
    vencimentoFormatado: string;
    procedencia: string;

}

export class MedicamentoEstoque{
    id: number;
}

export class Estoque{
    idEstoque:number;
}

export class TransacaoBaixa{
    idReceita : number;
    dataTransacao : Date;
    quantidade: number;
    medicamento: MedicamentoEstoque;
    estoque: Estoque;
    eTipoTransacao: number;
}