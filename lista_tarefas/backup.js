$(document).ready(function(){
    
    // Escopo "global"
    var novaTarefa;
    
    // Evento adicionar tarefa
    $('form').on('submit', function (e) {
        e.preventDefault();

        const tarefa = $('#tarefa').val();
        const novaTarefa = $('<li></li>');
        const linkTarefa = $('<a href ="#"></a>').text(tarefa).appendTo(novaTarefa);

        $('ul').append(novaTarefa);
        $('#tarefa').val('');
    })

    // Adicionando a estilização do link riscado
    $('ul').on('click', 'li', function (e) {
        $(this).css('text-decoration', 'line-through');
    })
})