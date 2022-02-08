export default function ValidaCPF(strCPF) {

    console.log("validaCPF()");

    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF === "00000000000") {
        return false;
    }

    for (var i = 1; i <= 9; i++) {
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    }
    Resto = (Soma * 10) % 11;

    if ((Resto === 10) || (Resto === 11)) {
        Resto = 0;
    }
    if (Resto !== parseInt(strCPF.substring(9, 10))) {
        return false;
    }

    Soma = 0;
    for (var l = 1; l <= 10; l++) {
        Soma = Soma + parseInt(strCPF.substring(l - 1, l)) * (12 - l);
    }
    Resto = (Soma * 10) % 11;

    if ((Resto === 10) || (Resto === 11)) {
        Resto = 0;
    }
    if (Resto !== parseInt(strCPF.substring(10, 11))) {
        return false;
    }
    return true;
}
