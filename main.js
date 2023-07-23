const ctx = document.getElementById("Chart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["20", "25", "30", "35", "40", "45"],
    datasets: [
      {
        label: "# of Salary",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// const canvas_ctx = ctx.getContext("2d");
const doughnut1 = document.getElementById("doughnut1");
const doughnut2 = document.getElementById("doughnut2");
const doughnut3 = document.getElementById("doughnut3");

createDoughnut("doughnut1", [18]);
createDoughnut("doughnut2", [15]);
createDoughnut("doughnut3", [10]);
function createDoughnut(d_n, data) {
  const doughnutlabel = {
    id: "doughnutlabel",
    afterDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;
      ctx.save();
      const x = chart.getDatasetMeta(0).data[0].x;
      const y = chart.getDatasetMeta(0).data[0].y;
      // console.log(chart.getDatasetMeta(0).data[0]);
      // ctx.fillRect(x, y, 10, 10);
      ctx.font = "bold  14px sans-serif";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.fillText(calc_perc(data) + "%", x, y);
    },
  };

  

  // setup
  var data = {
    datasets: [
      {
        //label: "Weekly Sales",
        data: data,
        backgroundColor: [
          "rgba(255, 26, 104, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(0, 0, 0, 0.2)",
        ],
        borderColor: [
          "rgba(255, 26, 104, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(0, 0, 0, 1)",
        ],
        borderWidth: 3,
      },
    ],
  };

  
  // config
  const config = {
    type: "doughnut",
    data,
    options: {},
    plugins: [doughnutlabel],
  };

  // render init block
  const myChart = new Chart(document.getElementById(d_n), config);
  const ctx = document.getElementById(d_n).getContext("2d");
}

function calc_perc(data) {
  let max = 17; //This is the default 100% that will be used if no Max value is found
  // try {
  //Try to get the actual 100% and overwrite the old max value
  max = Object.values(data.datasets[0].data).map((num) => {
    return +num; //Convert num to integer
  });
  max = Math.max.apply(null, max);
  // } catch (e) {
  //   console.log(e)
  // }
  return Math.round((15 * 100) / max);
}
