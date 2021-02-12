var tabelaCampeonatoBrasileiro

$(function () {


    var options = {
        "searching": true, 
        "paging": false,
        "info": false,
        "ajax": "https://danielvieira7.github.io/campeonato-brasileiro-json-api/campeonato-brasileiro.json",
        "dom": '<"top"if>rt<"bottom"><"clear">',
    }

    tabelaCampeonatoBrasileiro = $("#tabela-campeonato-brasileiro").DataTable(options)

})