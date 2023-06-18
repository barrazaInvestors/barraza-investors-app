<template>
    <div class="container-sm canvas">
        <canvas id="accionistaChart" :options="chartOptions"></canvas>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';
import Chart from 'chart.js/auto';
import { useServices } from '@/composables/useServices';


onMounted(async() => {
  await obtenerDatos();
  
   const ctx = document.getElementById('accionistaChart');
  const data = {
    labels: inversionistaNombre,
    datasets: [{
      label: '',
      data: porcentajeParticipacion,
      backgroundColor: [
        'rgb(79, 247, 71)',// verde manzana
        'rgb(71, 247, 146)', //verde mar
        'rgb(71, 247, 212)', //cian
        'rgb(55, 183, 227)',// celeste
        'rgb(71, 84, 247)',//azul
        'rgb(111, 116, 177)',//morado
        'rgb(247, 87, 249)',// lila
        'rgb(247, 71, 196)', //magenta
        'rgb(249, 75, 148)',//rosado
        'rgb(247, 172, 71)', //naranja
        'rgb(247, 210, 71)',// amarillo
        'rgb(199, 247, 71)', //verde limon


      ],
      hoverOffset: 4,
      hoverBackgroundColor: 'rgb(44, 62, 80)',
      borderRadius: 4,
      cutout: '70%',

    }],
      chartOptions: {
        responsive: true,
        legend: {
          position: 'left' 
        }
      }
  }
  const myChart = new Chart(ctx, {
    type: 'doughnut',
  data: data,
  });
  myChart;
})
const { obtenerDatos, inversionistaNombre, porcentajeParticipacion } = useServices();

</script>
<style scoped lang="scss">
  canvas{
    width: 300px;
    height: 300px;
  }
  .canvas{
    position: relative; 
    display: flex;
    justify-content: center;
    width: 100%;
    height: 60vh;
    margin-bottom: 5.5rem;
  }
</style>