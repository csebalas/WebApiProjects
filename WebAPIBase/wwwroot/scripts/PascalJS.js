window.onload = function () {
    // mi történik ha betöltődött az oldal
    drawPascal(10);
}

var drawPascal = function (sorSzam) {
    var pascalDiv = document.getElementById('pascal');

    for (var sor = 0; sor < sorSzam; sor++) {

        var ujSorDiv = document.createElement('div');
        ujSorDiv.classList.add('sor');
        pascalDiv.appendChild(ujSorDiv);

        for (var oszlop = 0; oszlop <= sor; oszlop++) {
            var ujElemDiv = document.createElement('div');
            ujElemDiv.classList.add('elem');
            ujElemDiv.innerText =
                faktorialis(sor) / (faktorialis(oszlop) * faktorialis(sor - oszlop));
            ujSorDiv.appendChild(ujElemDiv);
        }
    }
}

var faktorialis = function (n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * faktorialis(n - 1);
    }
}