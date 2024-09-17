const ctx = document.getElementById('graphic-1').getContext('2d');

// Criando o gradiente
const gradient = ctx.createLinearGradient(0, 0, 0, 300);
gradient.addColorStop(0, 'rgba(255, 0, 0, 0.5)'); // Cor no topo (mais opaca)
gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');   // Cor na base (transparente)

const labelsBottom = ['5k', '10k', '15k', '20k', '25k', '30k', '35k', '40k', '45k', '50k', '55k', '60k'];

new Chart(ctx, {
  type: 'line',
  data: {
    labels: labelsBottom,
    datasets: [{
      label: '', // Sem label
      data: [9, 20, 25, 10, 15, 30, 40, 35, 20, 15, 20, 25, 50, 60, 30, 40],
      fill: true, // Preencher a área abaixo da linha
      backgroundColor: gradient, // Aplicar o gradiente
      borderColor: 'rgb(255, 0, 0)', // Cor da linha
      borderWidth: 2
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
        beginAtZero: true,
        ticks: {
          callback: function(value, index, values) {
            const labels = [20, 60, 40, 80, 100];
            return labels.includes(value) ? `${value}%` : ''; // Adiciona '%' apenas para valores específicos
          },
          stepSize: 20, // Ajusta o espaçamento entre os valores dos ticks
          maxTicksLimit: 100, // Limita o número máximo de ticks exibidos
          padding: 1 // Ajusta o espaçamento entre o rótulo e o eixo
        },
        suggestedMin: 0,
        suggestedMax: 100
      }
    }
  }
});