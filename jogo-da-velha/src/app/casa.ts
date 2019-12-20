interface posicao {
    linha: number,
    coluna: number
}

export class Casa {

    constructor(lin: number, col: number){
        this.clicado = false;
        this.ttone = '';
        this.pos = { linha : lin, coluna : col };
    }
    
    public clicado: boolean;
    public ttone: string;
    public pos: posicao;
    
}
