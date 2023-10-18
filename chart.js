//pie
var ctxP = document.getElementById("pie").getContext('2d');
var myPieChart = new Chart(ctxP, {
    type: 'pie',
    data: {
        labels: ["Network", "Firewall", "Backup"],
        datasets: [{
        data: [187, 95,78],
        backgroundColor: ["#1ba1b9", "#173d7b", "#e0339c", "#949FB1", "#4D5360"],
        hoverBackgroundColor: ["rgba(27, 161, 185, 0.85)", "rgba(23, 61, 123, 0.85)", "rgba(224, 51, 156, 0.85)"]
        }]
    },
    options: {
    responsive: true
    }
});
