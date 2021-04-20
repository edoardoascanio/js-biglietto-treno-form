window.addEventListener("load", function () {
    var myForm = document.getElementById("myForm")
    var submitBtn = document.querySelector("[type='submit'")

    myForm.addEventListener("submit", onSubmit)
    myForm.addEventListener("reset", onSubmit)

})


function onSubmit(event) {
    event.preventDefault()

    var form = event.currentTarget
    var elements = form.elements

    console.log("nome = " + elements.nomeCognome.value);
    console.log("Chilometri = " + elements.km.value);
    console.log("età = " + elements.eta.value);

    var nomeCognome = document.myForm.elements.nomeCognome.value;
    document.getElementById("nomeInserito").innerHTML = + nomeCognome;

    var numeroChilometri = document.myForm.elements.numeroChilometri.value;

    var offerta = document.myForm.elements.offerta.value;
    document.getElementById("offerta").innerHTML = + offerta;

    var codiceBiglietto = Math.floor(Math.random() * 10000 - 1) + 90000;
    document.getElementById("codice").innerHTML = + codiceBiglietto;

    var numeroCarrozza = Math.floor(Math.random() * 10) + 1;
    document.getElementById("carrozza").innerHTML = + numeroCarrozza;

    var prezzoAlChilometro = (0.21);

    var prezzoTotale = (numeroChilometri * prezzoAlChilometro);

    var prezzo = (Math.random() * 10);
    prezzo.toFixed(2)
   document.getElementById("prezzo").innerHTML = + prezzoTotale
   



}

function onReset(event) {
    event.preventDefault()

    var form = event.currentTarget
    var elements = form.elements

    elements.nomeCognome.value = "";
    elements.km.value = "";
    elements.eta.value = "";

}



