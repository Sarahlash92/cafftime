import CaffSimulator from '../components/CaffSimulator';
import LineGraph from '../components/LineGraph';
import PieChart from '../components/PieChart';


function Daily({ todaySum, remaining, remainingByTime, remainingatBedtime, userSetting }) {
  return (
    <div className="rounded-t-2xl h-[calc(80vh-64px)] overflow-scroll bg-white">
      <h1 className="text-2xl font-bold mt-8"> TODAY </h1>
      <div className="block p-6 bg-gray-50 border border-gray-200 rounded-lg shadow m-2">
        <div className="flex justify-between items-center">
          <div className="w-2/3">
            <PieChart todaySum={todaySum} userSetting={userSetting}></PieChart>
          </div>
          <div className="w-1/3">
            <p className="text-2xl font-bold mt-8">{todaySum} mg</p>
            <hr className="w-2/3 m-auto border-gray-400 border-1" />
            <p className="text-2xl font-bold">{userSetting.dailyLimit} mg</p>
          </div>
        </div>
        <p className="text-xs text-gray-500 text-left my-2">
          ☕ The FDA has set the maximum recommended daily caffeine intake for
          healthy adults at 400 milligrams, which is generally considered safe.
        </p>
      </div>
      <div className="block p-6 bg-gray-50 border border-gray-200 rounded-lg shadow m-2">
        <CaffSimulator
          remaining={remaining}
          remainingatBedtime={remainingatBedtime}
          className="mb-2"
        ></CaffSimulator>
        <p className="text-xs text-gray-500 text-left my-2">
          ⚙️ Individual caffeine sensitivity can vary, so you can adjust it in
          the 'Settings' tab.
        </p>
      </div>
      <div className="block p-6 bg-gray-50 border border-gray-200 rounded-lg shadow m-2">
        <LineGraph
          remainingByTime={remainingByTime}
          userSetting={userSetting}
        ></LineGraph>
        <p className="text-xs text-gray-500 text-left my-2">
          😴 The red line shows the maximum caffeine level for restful sleep.
          Typically, caffeine levels need to drop to around 50mg to ensure a
          good night's sleep.
          <br />
        </p>
      </div>
    </div>
  );
}

export default Daily;
