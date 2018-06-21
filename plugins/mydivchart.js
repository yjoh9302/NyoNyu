export default function(elementName){
    var container = document.getElementById(elementName);
    var data = {
        categories: ['미션 달성도', '아이템 수집', '잔해물 수집'],
        series: [{
            name : '달성도(%)',
            data : [83, 62, 37 ]

        }]

    };
    tui.chart.barChart(container, data);
};