var tabelaCampeonatoBrasileiro
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

$(function () {


    var options = {
        "searching": false, 
        "paging": false,
        "info": false,
        "ajax": "https://danielvieira7.github.io/campeonato-brasileiro-json-api/campeonato-brasileiro.json",
        // "ajax": "json.json",
        "dom": '<"top"if>rt<"bottom"><"clear">',
        "language": { "emptyTable": "Não há tabela para esta pesquisa",
            "sInfo": "Exibindo um total de _TOTAL_ times.",
            "sInfoEmpty": "",
            "search": "Pesquisar: ",
            "infoFiltered": "",
            "sZeroRecords": "Não há tabela para esta pesquisa",},
        columns: [
            {"data": "nome"},
            {"data": "pontos"},
            {"data": "jogos"},
            {"data": "vitorias"},
            {"data": "empates"},
            {"data": "derrotas"},
            {"data": "gols_pro"},
            {"data": "gols_contra"},
            {"data": "saldo_gols"},
            {"data": "cartoes_amarelo"},
            {"data": "cartoes_vermelhos"},
            {"data": "aproveitamento"},
            {"data": "recentes"},
            {"data": "proximo_adversario"},
        ],
        columnDefs:[
            { "targets": 0, "width": "5%", "className": "dt-center"},
            { "targets": 1, "width": "5%", "className": "dt-center"},
            { "targets": 2, "width": "5%", "className": "dt-center"},
            { "targets": 3, "width": "5%", "className": "dt-center"},
            { "targets": 4, "width": "5%", "className": "dt-center"},
            { "targets": 5, "width": "5%", "className": "dt-center"},
            { "targets": 6, "width": "5%", "className": "dt-center"},
            { "targets": 7, "width": "5%", "className": "dt-center"},
            { "targets": 8, "width": "5%", "className": "dt-center"},
            { "targets": 9, "width": "5%", "className": "dt-center"},
            { "targets": 10, "width": "5%", "className": "dt-center"},
            { "targets": 11, "width": "5%", "className": "dt-center"},
            { "targets": 12, "width": "5%", "className": "dt-center"},
            { "targets": 13, "width": "5%", "className": "dt-center"},
        ],
        "order": [[ 1, "desc" ]],
        "pageLength": 25
    }

    tabelaCampeonatoBrasileiro = $("#tabela-campeonato-brasileiro").DataTable(options)

})

const estilo = urlParams.get('estilo')
console.log(estilo);