/*
var aluno_academia = {
    id: 1,
    nome: "Aksel",
    peso: 850,
    altura: 1.90
};

var peso_aluno = aluno_academia.peso;
var nome_aluno = aluno_academia.nome;
var altura_aluno = aluno_academia.altura;

var imc_aluno = peso_aluno / (altura_aluno * altura_aluno);

if (imc_aluno <= 18.5){
    console.log("O aluno " + nome_aluno + "está a baixo do peso!")
} else if (imc_aluno >= 18.5 && imc_aluno <= 24.90) {
    console.log("O indice corporal do " + nome_aluno + " 5está dentro da margem do normal!")
} else {
    console.log("ATENÇÃO!! O aluno " + nome_aluno + " está a cima do peso!")
}

*/

/*
var notas_bimestre = [
    10,
    8,
    7,
    8
];

console.log(notas_bimestre.length);

*/
/*
var aprovado = true;
if(aprovado){
    console.log("Aluno aprovado!! Parabéns5")
}
*/
/*
var aprovado = true;

aprovado && console.log("Parabéns"); //Esse exemplo é o curto circuito, ele substitui o If, um modo mais simples mas pouco usado.
*/
/*
const nome = "Aksel Bruner";

constNomeValido = nome.length > 0;

constNomeValido && console.log(nome);
*/


/*
var x = "";
var y = 0;

if(x == y){
    console.log("TRUE");
    
} else {
    console.log("FALSE");
}
*/


/*
//if ternário defini uma variavel atraves de uma condição em linha, promovendo o ? como if e : como else.


//Define a variavel com o dia da semana (0 = Domingo, 1 = Segunda...)
var dia_semana = 65;

//Verifica a condição e define o resultado na variável 'status_loja'
var status_loja = (dia_semana == 0 || dia_semana == 6) ? "Funcionamos apenas de Segunda à Sexta" : "Loja aberta";

//Imprime o resultado no console
console.log(status_loja);
*/
/*
var time = "";

switch (time) {
    case "Palmeiras" : 
        console.log("Maior campeão do Brasil");
        break;
        case "São Paulo" : 
        console.log("Time das bibas");
        break;
        case "Flamengo" : 
        console.log("Time de favelado");
        break;
    default: 
        console.log("Nenhum time escolhido!");
        break;5
}
        */
/*
let meteoros_trimestre_um     =  "Alfa Centaurideos começa em 03/01 e termina em 05/01\nGama Normídeos começa em 17/02 e termina em 20/02\nPi Pupídeos começa em 25/03 e termina em 29/03";

let meteoros_trimestre_dois   =  "Líridas começa em 23/05 e termina em 26/05\nEta Aquáridas começa em 31/05 e termina em 02/06\nBootídeos de Junho começa em 16/06 e termina em 20/06";

let meteoros_trimestre_tres   =  "Eta Líridas começa em 19/08 e termina em 22/08\nAlfa Capricornídeos começa em 13/09 e termina em 17/09";

let meteoros_trimestre_quatro =  "Delta Aquáridas do Sul começa em 11/10 e termina em 15/10\nPiscis Austrinídeos começa em 04/12 e termina em 08/12\nPerseidas começa em 27/12 e termina em 31/12";

let data_atual = new Date();
let mes_atual = data_atual.getMonth();

if(mes_atual == 0 || mes_atual == 1 || mes_atual == 2) {
    console.log("As chuvas de meteoros do primeiro trimestre são:\n\n"+meteoros_trimestre_um);
}
else if(mes_atual == 3 || mes_atual == 4 || mes_atual == 5) {
    console.log("As chuvas de meteoros do segundo trimestre são:\n\n"+meteoros_trimestre_dois);
}
else if(mes_atual == 6 || mes_atual == 7 || mes_atual == 8) {
    console.log("As chuvas de meteoros do terceiro trimestre são:\n\n"+meteoros_trimestre_tres);
}
else if(mes_atual == 9 || mes_atual == 10 || mes_atual == 11) {
    console.log("As chuvas de meteoros do quarto trimestre são:\n\n"+meteoros_trimestre_quatro);
}
else {
    console.log("Nenhuma chuva de meteoro no período informado");
}
    */