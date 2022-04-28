class Jogador {

    constructor(nome, cor) {
        this.nome = nome;
        this.cor = cor;  //cor é um objeto que receber o valor hexadecimal da cor e um index
        this.tropasRodada = 0;
        this.totalTropas = 0;
        this.territorios = [];
        this.cartas = [];
    }



}

export default Jogador;