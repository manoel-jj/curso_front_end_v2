$(document).ready(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();
        const listaDeTarefas = $('#lista-tarefas').val();
        const novaTarefa = $('<li style="display:none"></li>');
        $(`<li>${listaDeTarefas}</li>`).appendTo(novaTarefa);

        $(novaTarefa).appendTo('ul');
        $(novaTarefa).fadeIn(1000);
        $('#lista-tarefas').val('')

    })


})