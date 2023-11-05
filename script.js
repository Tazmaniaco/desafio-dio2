function rank(win, loss) {
    var points = win - loss;
    return points;
}
var result = rank(81, 20);
var patent = "";
//console.log(result)
for (var i = 0; i < result; i++) {
    if (result < 10) {
        patent = "Ferro";
    }
    else if (result >= 11 && result <= 20) {
        patent = "Bronze";
    }
    else if (result >= 21 && result <= 50) {
        patent = "Prata";
    }
    else if (result >= 51 && result <= 80) {
        patent = "Ouro";
    }
    else if (result >= 81 && result <= 90) {
        patent = "Diamante";
    }
    else if (result >= 91 && result <= 100) {
        patent = "Lendário";
    }
    else if (result >= 101) {
        patent = "Imortal";
    }
}
console.log("O Her\u00F3i tem de saldo de ".concat(result, " est\u00E1 no n\u00EDvel de ").concat(patent));
