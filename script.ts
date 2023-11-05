function rank(win:number, loss:number) {
    let points:number = win - loss
    return points
}

let result:number = rank(81, 20)
let patent:string = ""
//console.log(result)

for ( let i:number = 0; i < result; i++) {
    if( result < 10){
        patent = "Ferro"
    } else if( result >= 11 && result <= 20) {
        patent = "Bronze"
    } else if(result >= 21 && result <= 50) {
        patent = "Prata"
    } else if(result >= 51 && result <= 80) {
        patent = "Ouro"
    } else if(result >= 81 && result <= 90) {
        patent = "Diamante"
    } else if(result >= 91 && result <= 100) {
        patent = "Lendário"
    } else if(result >= 101) {
        patent = "Imortal"
    }
}
console.log(`O Herói tem de saldo de ${result} está no nível de ${patent}`)