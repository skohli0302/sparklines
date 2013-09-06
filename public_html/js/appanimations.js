$(function() {
    var flipsparkline = {
        chart: {
            backgroundColor: null,
            events: {
                click: function(e) {
                    $(this.renderTo).flippyReverse();
                }
            }
        },
        xAxis: {
//                            disable x axis init
            lineWidth: 0,
            minorGridLineWidth: 0,
            lineColor: 'transparent',
            minorTickLength: 0,
            tickLength: 0,
//                            disable x axis end
            labels: {
                enabled: false
            }
        },
        yAxis: {
            minorGridLineWidth: 0,
            gridLineWidth: 0,
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
                color: '#FFFFFF',
                enableMouseTracking: false,
                marker: {
                    enabled: false,
                }
            }
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        series: [{
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
            }],
        title: {
            margin: 0,
            text: null
        },
        tooltip: {
            enabled: false
        }

    };

    $("#stattendance").click(function() {
        $(this).flippy({
            direction: "TOP",
            duration: "750",
            onReverseMidway: function() {
                this.jO.css({'padding-top': '20px', 'padding-left': '10px'});
            },
            verso: function() {
                $(this).css({'padding-top': '0px', 'padding-left': '0px'});
                flipsparkline.series[0] = {data: [30, 10, 30, 40, 27]};
                $(this).highcharts(flipsparkline);
            }
        });

    });

    $("#facattendance").click(function() {
        $(this).flippy({
            direction: "TOP",
            duration: "750",
            onReverseMidway: function() {
                this.jO.css({'padding-top': '20px', 'padding-left': '10px'});
            },
            verso: function() {
                $(this).css({'padding-top': '0px', 'padding-left': '0px'});
                flipsparkline.series[0] = {data: [30, 10, 30, 40, 27]};
                $(this).highcharts(flipsparkline);
            }
        });
    });

    $("#lectures").click(function() {
        $(this).flippy({
            direction: "TOP",
            duration: "750",
            onReverseMidway: function() {
                this.jO.css({'padding-top': '20px', 'padding-left': '10px'});
            },
            verso: function() {
                $(this).css({'padding-top': '0px', 'padding-left': '0px'});
                flipsparkline.series[0] = {data: [30, 90, 20, 40, 27]};
                $(this).highcharts(flipsparkline);
            }
        });
    });

    $('#cana').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Course Analytics'
        },
        subtitle: {
            text: 'Session: Prep 1 Test: Nov Sept 2013'
        },
        xAxis: {
            categories: ['Maths', 'Physics', 'Social Science', 'Chemistry'],
            tickmarkPlacement: 'on',
            title: {
                enabled: true
            }
        },
        yAxis: {
            title: {
                text: '% of Students'
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>:  {point.y:,.0f} <br/>',
            shared: true
        },
        plotOptions: {
            area: {
                stacking: 'percent',
                lineColor: '#ffffff',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#ffffff'
                }
            }
        },
        series: [{
                name: 'Above 75',
                data: [20, 20, 25, 25]
            }, {
                name: 'Above 60',
                data: [80, 29, 23, 35]
            }, {
                name: 'Pass',
                data: [5, 70, 55, 40]  
            }, {
                name: 'Fail',
                data: [5, 1, 7, 10]
            }]
    });
});