
var nomeCognome 
var numeroChilometri 
var eta 
var minorenne
var over65
var prezzoAlChilometro = (0.21);

var prezzoTotale = (numeroChilometri * prezzoAlChilometro);
console.log("Prezzo Totale" + prezzoTotale + "£");
var prezzo = (Math.random() * 10);
prezzo.toFixed(2)

if (Number.isNaN(numeroChilometri) || Number.isNaN(eta)) {
    alert("Inserire cifre numeriche")
}

if (eta = minorenne) {
    var scontoMinorenni = ((prezzoTotale * 20) / 100);
    console.log("Sconto Minorenni" + scontoMinorenni + "£")
}

if (eta = over65) {
    var scontoOver = ((prezzoTotale * 40) / 100);
    console.log("Sconto Over" + scontoOver + "£")
}
