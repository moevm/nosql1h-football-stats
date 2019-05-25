$(document).ready(function(){
	var Canvas = document.getElementById('myChart').getContext('2d');
	Chart.defaults.global.defaultFontFamily = "Lato";
	Chart.defaults.global.defaultFontSize = 18;

	var dataFirst = {
		label: name1,
		data: Team1Arr,
		lineTension: 0.3,
		fill: false,
		borderColor: 'red',
		backgroundColor: 'transparent',
		pointBorderColor: 'red',
		pointBackgroundColor: 'lightgreen',
		pointRadius: 5,
		pointHoverRadius: 15,
		pointHitRadius: 30,
		pointBorderWidth: 2,
		pointStyle: 'rect'
	  };

	var dataSecond = {
		label: name2,
		data: Team2Arr,
		lineTension: 0.3,
		fill: false,
		borderColor: 'purple',
		backgroundColor: 'transparent',
		pointBorderColor: 'purple',
		pointBackgroundColor: 'lightgreen',
		pointRadius: 5,
		pointHoverRadius: 15,
		pointHitRadius: 30,
		pointBorderWidth: 2
	  };

	var speedData = {
	  labels: Label,
	  datasets: [dataFirst, dataSecond]
	};

	var chartOptions = {
	  legend: {
		display: true,
		position: 'top',
		labels: {
		  boxWidth: 80,
		  fontColor: 'black'
		}
	  }
	};

	var lineChart = new Chart(Canvas, {
	  type: 'line',
	  data: speedData,
	  options: chartOptions
	});
})