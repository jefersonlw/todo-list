export class Card {

    idcard: number;
    dstitulo: string;
    dsdescricao: string;
    dtcriacao: Date;
    dtconcluido: Date;
    iestatus: string;

    constructor(idcard: number, dstitulo: string, dsdescricao: string, dtcriacao: Date, dtconcluido: Date, iestatus: string) {
        this.idcard = idcard;
        this.dstitulo = dstitulo;
        this.dsdescricao = dsdescricao;
        this.dtcriacao = dtcriacao;
        this.dtconcluido = dtconcluido;
        this.iestatus = iestatus;
    }

}
