$(document).ready(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();
        const listaDeTarefas = $('#lista-tarefas').val();
        const novaTarefa = $('<li style="display:none"></li>');
        $(`<li>${listaDeTarefas}</li>`).appendTo(novaTarefa)
        $(novaTarefa).appendTo('ul');
        $(novaTarefa).appendTo('novaTarefa');
        $(novaTarefa).fadeIn(1000);
    })
    $('ul').click(function () {
        $(this).toggleClass("sublinhar");

    })

})
















