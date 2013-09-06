$(function() {
//defining sparkline defauls
    var sparkline_defaults = {
        chart: {
//            make a transparent background
            backgroundColor: null,
            height: 100,
            events: {
                click: function(e) {
                    console.log('chart clicked');
                }
            }
        },
        xAxis: {
//          disable x axis init

            lineWidth: 0,
            minorGridLineWidth: 0,
            lineColor: 'transparent',
            minorTickLength: 0,
            tickLength: 0,
//          disable x axis end
            labels: {
//                no lable required
                enabled: false
            }
        },
        yAxis: {
//          disable y axis init

            minorGridLineWidth: 0,
            gridLineWidth: 0,
//          disable y axis end
            labels: {
                enabled: false
            },
            title: {
                text: null
            }
        },
        plotOptions: {
            series: {
                lineWidth: 2
            },
            line: {
                animation: true,
                color: 'RED',
                //make it true if want to track mouse movement on drawn line
                enableMouseTracking: false,
                marker: {
//            to remove point markers
                    enabled: false,
                }
            }
        },
        legend: {
//    no legent pls
            enabled: false
        },
        credits: {
//    make it true to make highchart baner visible
            enabled: false
        },
        series: [{
                data: [3, 5, 10, 2, 1]
            }],
        title: {
            margin: 0,
            text: null
        },
        tooltip: {
            enabled: false
        }

    };

   
    //personalize your sparkline 1 here
    var chart1opts = {
        plotOptions: {
            line: {
                color: 'white',
            }
        },
        chart: {
            backgroundColor: 'orange'
        },
        series: [{
                data: [22, 5, 10, 2, 1]
            }]
    };
    //call high chart with merged option
    $('#chart1').highcharts($.extend(true, {}, sparkline_defaults, chart1opts));

    //personalize your sparkline 2 here
    var chart2opts = {
        plotOptions: {
            line: {
                color: 'white',
            }
        },
        chart: {
            backgroundColor: 'red'
        },
        series: [{
//                data: [22, 5, 10, 2, 1]
            }]
    };
    //call high chart with merged option
    $('#chart2').highcharts($.extend(true, {}, sparkline_defaults, chart2opts));

    //personalize your sparkline 3 here
    var chart3opts = {
        plotOptions: {
            line: {
                color: 'black'
            }
        },
        series: [{
                data: [92, 25, 50, 2, 14]
            }]
    };
    //call high chart with merged option
//    debugger;
    $('#chart3').highcharts($.extend(true, {}, sparkline_defaults, chart3opts));
});