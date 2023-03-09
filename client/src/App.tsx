import './App.css';
import { useState, useEffect } from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import { getLogs } from "../src/ApiService"
import { getDatabase } from '../src/ApiService';
import { DateTime } from "luxon";
import Log from './pages/Log';
import Daily from './pages/Daily';
import AddData from './pages/AddData';
import EditData from './pages/EditData';
import Setting from "./pages/Setting";
import { calculateRemaining, setGraphTime, setGraphTimeforTomorrow } from './Utilities';

function App() {
  const location = useLocation();
  const [logs, setLogs] = useState([]);
  const [flattenedLogs, setFlattenedLogs] = useState([]);
  const [todaySum, setTodaySum] = useState(0);
  const [foodDb, setFoodDb] = useState([]);
  const [remaining, setRemaining] = useState(calculateRemaining(logs));
  const [remainingByTime, setRemainingByTime] = useState([]);
  const [remainingatBedtime, setRemainingatBedTime] = useState(0);
  const [userSetting, setUserSetting] = useState({
    dailyLimit: 400,
    sleepTreshold: 50,
    sleepTime: "10PM"
  });

  /* set time for line graph*/
  const times = [];
  for (let i = 6; i <= 24; i++) {
    times.push(setGraphTime(i));
  }

   for (let i = 1; i <= 4; i++) {
     times.push(setGraphTimeforTomorrow(i));
   }


  /* Get food DB */
  useEffect(() => {
    getDatabase().then((res) => {
      setFoodDb(res);
    });
  }, []);

  /* Get user logs grouped by date*/
  useEffect(() => {
    getLogs().then((res) => {
      const groupedLogs = res.reduce((acc, log) => {
        const date = new Date(log.timestamp).toDateString();
        if (acc[date]) {
          acc[date].push(log);
        } else {
          acc[date] = [log];
        }
        return acc;
      }, {});

      const groupedLogsArray = Object.entries(groupedLogs).map(
        ([date, logs]) => {
          return { date, logs };
        }
      );

      setLogs(groupedLogsArray);

      if (groupedLogsArray[0].date === new Date().toDateString()) {
        setTodaySum(
          groupedLogsArray[0].logs.reduce((acc, log) => {
            acc = acc + log.caffeine;
            return acc;
          }, 0)
        );
      }
    });

    setFlattenedLogs(logs.flatMap((log) => log.logs));

    function filterLogByTime(logs, time) {
      const filteredLogByTime = logs.filter(
        (log) => Date.parse(log.timestamp) < time
      );

      return filteredLogByTime;
    }

    /* convert bedtime string(from userSetting) to real time format*/
    const now = DateTime.local();
    const tomorrow = DateTime.local().plus({ days: 1 });
    const parsedTime = DateTime.fromFormat(userSetting.sleepTime, "ha");
    let sleepTime;
    if (userSetting.sleepTime.slice(-2) !== 'AM') {
      sleepTime = parsedTime.set({
        year: now.year,
        month: now.month,
        day: now.day,
      });
    } else {
      sleepTime = parsedTime.set({
        year: tomorrow.year,
        month: tomorrow.month,
        day: tomorrow.day
      });
    }

    /* Calculate remaining caffeine in body using helper function*/
    setRemaining(calculateRemaining(flattenedLogs));
    setRemainingByTime(times.map(time => calculateRemaining(filterLogByTime(flattenedLogs, time), time)));
    setRemainingatBedTime(calculateRemaining(flattenedLogs, sleepTime));
  }, [logs]);



  /* if we're in add page or edit page, don't show '+' button */
  if (
    location.pathname === "/add" ||
    location.pathname.includes("edit") ||
    location.pathname === "/setting"
  ) {
    return (
      <div className="App relative">
        <Routes>
          <Route path="/log" element={<Log logs={logs} />} />
          <Route
            path="/"
            element={
              <Daily
                todaySum={todaySum}
                remaining={remaining}
                remainingByTime={remainingByTime}
                remainingatBedtime={remainingatBedtime}
                userSetting={userSetting}
              />
            }
          />
          <Route path="/add" element={<AddData foodDb={foodDb} />} />
          <Route path="/log/edit/:id" element={<EditData />} />
          <Route
            path="/setting"
            element={
              <Setting
                userSetting={userSetting}
                setUserSetting={setUserSetting}
              />
            }
          />
        </Routes>
      </div>
    );
  }

  return (
    <div className="App relative">
      <Routes>
        <Route path="/log" element={<Log logs={logs} />} />
        <Route
          path="/"
          element={
            <Daily
              todaySum={todaySum}
              logs={logs}
              remaining={remaining}
              remainingByTime={remainingByTime}
              remainingatBedtime={remainingatBedtime}
              userSetting={userSetting}
            />
          }
        />
        <Route path="/add" element={<AddData />} />
        <Route path="/log/edit/:id" element={<EditData />} />
        <Route
          path="/setting"
          element={
            <Setting
              userSetting={userSetting}
              setUserSetting={setUserSetting}
            />
          }
        />
      </Routes>
      <Link to="/add">
        <button className="absolute bottom-16 right-4 min-w-auto w-14 h-14 bg-green-500 p-2 rounded-full hover:bg-green-700 text-white font-semibold">
          +
        </button>
      </Link>
    </div>
  );
}

export default App;
