const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let tabelaCampeonatoBrasileiro

$(function () {
    let options = {
        "searching": false, 
        "paging": false,
        "info": false,
        "responsive": true,
        serverSide: false,
        processing: true,
        "ajax": "https://danielvieira7.github.io/campeonato-brasileiro-json-api/campeonato-brasileiro.json",
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
            { responsivePriority: 1, targets: 0, "width": "2.5%", "className": "text-center" },
            { responsivePriority: 2, targets: 1, "className": "text-center" },
            { responsivePriority: 3, targets: 2, "className": "text-center" },
            { responsivePriority: 3, targets: 3, "className": "text-center" },
            { responsivePriority: 3, targets: 4, "className": "text-center" },
            { responsivePriority: 3, targets: 5, "className": "text-center" },
            { responsivePriority: -1, targets: 6, "className": "text-center" },
            { responsivePriority: -1, targets: 7, "className": "text-center" },
            { responsivePriority: -1, targets: 8, "className": "text-center" },
            { responsivePriority: -1, targets: 9, "className": "text-center" },
            { responsivePriority: -1, targets: 10, "className": "text-center" },
            { responsivePriority: -1, targets: 11, "className": "text-center" },
            { responsivePriority: -1, targets: 12, "className": "text-center" },
            { responsivePriority: -1, targets: 13, "className": "text-center" },
        ],
        "order": [[ 1, "desc" ]],
        "pageLength": 25
    }

    tabelaCampeonatoBrasileiro = $("#tabela-campeonato-brasileiro").DataTable(options)

})

const estilo = urlParams.get('estilo')

let file
switch(estilo) {
    case "colorful-blue-purple":
        file = "styles/style-colorful-blue-purple.css";
        break;
    case "dark-theme":
        file = "styles/style-dark-theme.css";
        break;
    case "light-blue":
        file = "styles/style-light-blue.css";
        break;
    case "light-green":
        file = "styles/style-light-green.css";
        break;
    default:
        file = "styles/style-default.css";
}

let link = document.createElement( "link" );
link.href = file;
link.type = "text/css";
link.rel = "stylesheet";
link.media = "screen,print";

document.getElementsByTagName( "head" )[0].appendChild( link );