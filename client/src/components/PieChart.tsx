import { Doughnut } from "react-chartjs-2";

function PieChart({ todaySum , userSetting }) {
  const left = userSetting.dailyLimit - todaySum > 0 ? userSetting.dailyLimit - todaySum : 0;
  let backgroundColor;

  if (todaySum < userSetting.dailyLimit*0.4) {
    backgroundColor = ["#10b981", "#fcd34d"];
  } else if (todaySum > userSetting.dailyLimit - userSetting.dailyLimit*0.25) {
    backgroundColor = ["#ef4444", "#fcd34d"];
  } else {
    backgroundColor = ["#f59e0b", "#fcd34d"];
  }

  const data = {
    datasets: [
      {
        data: [todaySum, left],
        backgroundColor: backgroundColor,
        borderWidth: 0,
        scaleBeginAtZero: true,
      },
    ],
  };

  return <Doughnut data={data}/>;
}

export default PieChart
