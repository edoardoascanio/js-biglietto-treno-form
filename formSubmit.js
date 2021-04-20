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

}

function onReset(event) {
    event.preventDefault()

    var form = event.currentTarget
    var elements = form.elements

    elements.nomeCognome.value = "";
    elements.km.value = "";
    elements.eta.value = "";

}



