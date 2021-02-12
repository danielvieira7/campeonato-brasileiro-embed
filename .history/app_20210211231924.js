var tabelaFormasContrato

$(function () {


    var options = {
        "searching": true, 
        "paging": false,
        "info": false,
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
            {"data": "nome"},
            {"data": "figurar_slideshow"},
            {"data": "disponivel", render:formataSimNao},
        ],
        columnDefs:[
            { "targets": 0, "width": "5%", "className": "dt-center"},
            { "targets": 1, "width": "50%", "className": "dt-body-nowrap clicavel"},
            { "targets": 2, "width": "15%", "className": "dt-center dt-body-nowrap clicavel"},
            { "targets": 3, "width": "15%", "className": "dt-center dt-body-nowrap clicavel"},
        ],
        "order": [[ 1, "asc" ]],
        "pageLength": 25
    }

    tabelaFormasContrato = $("#formas-contrato-tabela").DataTable(options)
    $('.top input').trigger('focus'); //campo de pesquisa focada

    $('#formas-contrato-tabela tbody').on('click', 'tr td.clicavel', function(e) {
        index = tabelaFormasContrato.row(this).data()
        if (e.ctrlKey) window.location.href = (base_url + controller + "/cadastro/" + index.id_forma_contrato)
        else window.open( base_url + controller + "/cadastro/" + index.id_forma_contrato)
    })

    $('#frm-forma-contrato').submit(function(e) {
        e.preventDefault()

        var id = parseInt($("#id").val(),10)
        if( id > 0 ) {
            atualizaViaAjax(obtemFormData(this))
        } else {
            insereViaAjax(obtemFormData(this))
        }
    })  

})