interface posicao {
    linha: number,
    coluna: number
}

export class Casa {

    constructor(lin: number, col: number){
        this.ativo = true;
        this.ttone = '';
        this.pos = { linha : lin, coluna : col };
    }
    
    public ativo: boolean;
    public ttone: string;
    public pos: posicao;
    
}
