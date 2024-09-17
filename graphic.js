const ctx = document.getElementById('graphic-1');

const labelsBottom = ['5k', '10k', '15k', '20k', '25k', '30k', '35k', '40k', '45k', '50k', '55k', '60k']

new Chart(ctx, {
  type: 'line',
  data: {
    labels: labelsBottom,
    datasets: [{
      label: '', // Label está vazia
      data: [9, 20, 25, 10, 15, 30, 40, 35, 20, 15, 20, 25, 50, 60, 30, 40],
      borderWidth: 1,
      backgroundColor: [
        'rgb(255, 0, 0)',
      ],
      borderColor: [
        'rgb(255, 0, 0)'
      ]
    }]
  },
  options: {
    plugins: {
      legend: {
        display: false // Desativa a legenda
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
