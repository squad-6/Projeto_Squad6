const ctx = document.getElementById('myChart').getContext('2d');
const pyChart = document.getElementById('pyChart').getContext('2d');
const byChart = document.getElementById('byChart').getContext('2d');


const mychart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'Dezember',],
        datasets: [{
            label: 'Quantidade Por Mês',
            data: [9, 14, 12, 32, 21, 32, 8],
            backgroundColor: ['#DD3C87', '#E467A2', '#EC93BC', '#F2B6D2', '#F7D4E4'],
        }]
    },
    options: {
        responsive: true,
    }
});

const myChart = new Chart(pyChart, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Itens Doados',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],

        }]
    },
    options: {
        responsive: true,
    }
});

const mychartt = new Chart(byChart, {
    type: 'bar',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',],
        datasets: [{
            label: 'Quantidade Por Mês',
            data: [9, 14, 12, 32, 21, 32, 8, 23, 32, 45, 54, 33],
            backgroundColor: ['#DD3C87', '#E467A2', '#EC93BC', '#F2B6D2', '#F7D4E4'],
        }]
    },
    options: {
        responsive: true,
    }
});

