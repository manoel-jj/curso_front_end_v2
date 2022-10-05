$(document).ready(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();
        const listaDeTarefas = $('#lista-tarefas').val();
        const novaTarefa = $('<li style="display:none"></li>');
        const novaTarefaClick = $(`<li>${listaDeTarefas}</li>`).click(function () {
            $(this).toggleClass("sublinhar")
        })
        $(novaTarefaClick).appendTo('#listas');
        $('#lista-tarefas').val('');
        $(`<li>${listaDeTarefas}</li>`).appendTo(novaTarefa)
        $(novaTarefa).appendTo('novaTarefa');
        $(novaTarefa).fadeIn(1000);
    })


})


















