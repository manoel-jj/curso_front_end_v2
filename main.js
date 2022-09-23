const form = document.getElementById("form");
let campo_A = document.getElementById("campo-A");
const campo_B = document.getElementById("campo-B");


form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (campo_B.value > campo_A.value) {
        alert('Sucesso');
        campo_A.value = '';
        campo_B.value = '';
    } else {
        alert('o valor do campo B deve ser maior que o campo A ')
    }

})




