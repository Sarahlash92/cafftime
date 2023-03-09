function CaffSimulator({remaining, remainingatBedtime}) {
  let bgColor, textColor;
  let bgColorBedtime, textColorBedtime;

  if (remaining >= 200) {
    bgColor = "bg-red-500";
    textColor = "text-white";
  } else if (remaining >= 100) {
    bgColor = "bg-amber-500";
    textColor = "text-white";
  } else {
    bgColor = "bg-emerald-500";
    textColor = "text-white";
  }

    if (remainingatBedtime >= 100) {
      bgColorBedtime = "bg-red-500";
      textColorBedtime = "text-white";
    } else if (remainingatBedtime >= 50) {
      bgColorBedtime = "bg-amber-500";
      textColorBedtime = "text-white";
    } else {
      bgColorBedtime = "bg-emerald-500";
      textColorBedtime = "text-white";
    }


  return (
    <div>
      ☀️ Now you have{" "}
      <span className={`text-2xl font-bold ${textColor} ${bgColor}`}>
        {Math.round(remaining)}mg
      </span>{" "}
      of caffeine remaining in your body.
      <br />
      <br />
      🛏️ At bedtime, there will be{" "}
      <span className={`text-2xl font-bold ${textColorBedtime} ${bgColorBedtime}`}>
        {Math.round(remainingatBedtime)}mg
      </span>{" "} 
      of caffeine left in the body.
      <br />
    </div>
  );
}


export default CaffSimulator;
