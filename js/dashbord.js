//Attendence Chart sction start

const ctx = document.getElementById('myChart');



 var mychart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apil', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Attendance',
        data: [58, 56, 30, 75, 85, 88, 96, 65, 42, 98, 77, 45],
        backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(45, 4, 65, 0.8)',
            'rgba(34, 204, 88, 0.8)',
            'rgba(247, 0, 123, 0.51)',
            'rgba(195, 237, 26, 0.79)',
            'rgba(8, 149, 255, 0.43)',
            'rgba(255, 106, 0, 0.88)',
            'rgba(0, 25, 97, 0.88)',
            'rgba(0, 193, 97, 0.88)',
            'rgba(78, 96, 5, 0.88)'
        ],
        hoverOffset: 4
      }]
    },

  });

  //Attendence Chart section end