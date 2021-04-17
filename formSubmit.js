window.addEventListener("load", function () {

    onWindowLoad()
})


function onWindowLoad() {
    var myForm = document.getElementById("myForm");

    console.dir(myForm)

    myForm.addEventListener("submit", function (event) {
        var nomeElement = document.getElementById("nome-cognome")
        var kmElement = document.getElementById("km")
        var etaElement = document.getElementsById("eta")

        event.preventDefault();

        var form = event.currentTarget;
        var formElements = form.elements;

        var nome = formElements.nome.value;
        var km = formElements.cognome.value;

        nomeElement.innerHtml = "" ;
        kmElement.innerHtml = "" ;
        etaElement.innerHtml = "" ;
    })

    myForm.addEventListener("reset", function () {

        console.log("reset")
    })    

}

