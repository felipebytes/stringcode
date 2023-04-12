function inverter() {
    var stringOriginal = document.getElementById("string-input").value;
    var stringInvertida = "";

    for (var i = stringOriginal.length - 1; i >= 0; i--) {
        stringInvertida += stringOriginal[i];
    }

    document.getElementById("string-invertida").innerHTML = stringInvertida;
}
