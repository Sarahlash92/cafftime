/* Helper functions to draw pie chart and line graph*/

export function calculateRemaining(logs, selectedTime = Date.now()) {
  const halfLife = 5;
  const remainingCaffeine = logs.reduce((acc, item) => {
    const timePassed =
      (new Date(selectedTime) - new Date(item.timestamp)) / (60 * 60 * 1000);
    const halfLivesPassed = timePassed / halfLife;
    acc += item.caffeine * Math.pow(0.5, halfLivesPassed);
    return acc;
  }, 0);
  return remainingCaffeine;
}

export function setGraphTime(hour) {
  return new Date().setHours(hour, 0, 0, 0);
}

export function setGraphTimeforTomorrow(hour) {
  const now = new Date();
  return new Date(now.setDate(now.getDate() + 1)).setHours(hour, 0, 0, 0);
}
