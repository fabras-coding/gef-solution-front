export interface Medicamento{
    id_medicamento: number,
    nome_medicamento: string,
    Vencimentos: string[],
    procedencia: string,
    quantidade_estoque: number,
    unidade_medida: string
}