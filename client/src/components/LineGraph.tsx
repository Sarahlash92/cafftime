import { Line } from "react-chartjs-2";
import { Tooltip } from 'chart.js';
import { Chart as ChartJS } from "chart.js/auto";
import annotationPlugin from "chartjs-plugin-annotation";
import { DateTime } from "luxon";

ChartJS.register(annotationPlugin, Tooltip);

function LineGraph({ remainingByTime, userSetting }) {
  const labels = [];
  for (let i = 6; i <= 28; i++) {
    const dt = DateTime.fromObject({
      hour: i % 24,
      zone: userSetting.timezone,
    });
    labels.push(dt.toFormat("ha"));
  }

  const data = {
    labels: labels,
    datasets: [
      {
        type: "line",
        label: "Caffeine in body (mg)",
        borderColor: "#92400e",
        backgroundColor: "transparent",
        borderWidth: 1,
        data: remainingByTime,
      },
    ],
  };

  const options = {
    animation: false,

    plugins: {
      annotation: {
        annotations: {
          caffeineTreshold: {
            type: "line",
            yMin: userSetting.sleepTreshold,
            yMax: userSetting.sleepTreshold,
            borderColor: "rgb(255, 99, 132)",
            borderWidth: 2,
            borderDash: [10, 10],
            drawTime: "beforeDatasetsDraw",
          },
          sleepTime: {
            type: "line",
            mode: "vertical",
            scaleID: "x",
            value: labels.indexOf(userSetting.sleepTime),
            borderColor: "#1E429F",
            borderWidth: 2,
            borderDash: [10, 10],
            drawTime: "beforeDatasetsDraw",
          },
        },
      },
    },
  };

  
  return <Line type="line" data={data} options={options}/>;
}

export default LineGraph;
