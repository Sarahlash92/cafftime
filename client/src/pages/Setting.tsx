import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Setting({ userSetting, setUserSetting }) {
  const navigate = useNavigate();
  const [editedSetting, setEditedSetting] = useState({ ...userSetting });

  function handleChange(e) {
    setEditedSetting({
      ...editedSetting,
      [e.target.name]: e.target.value,
    });
  }


  function handleSubmit(e) {
    e.preventDefault();
    const updatedSetting = {
      ...editedSetting,
      dailyLimit: e.target.dailyLimit.value,
      sleepTreshold: e.target.sleepTreshold.value,
      sleepTime: e.target.sleepTime.value,
    };
    setEditedSetting(updatedSetting);
    localStorage.setItem("userSetting", JSON.stringify(updatedSetting));
    handleEdit();
  }

  useEffect(() => {
    const savedSetting = localStorage.getItem("userSetting");
    if (savedSetting) {
      setUserSetting(JSON.parse(savedSetting));
      setEditedSetting(JSON.parse(savedSetting));
    }
  }, [setUserSetting]);

  function handleEdit() {
    setUserSetting(editedSetting);
    navigate("/");
  }


  return (
    <div className="rounded-t-2xl h-[calc(80vh-64px)] overflow-scroll bg-white relative">
      <h1 className="text-2xl font-bold my-6">Setting</h1>
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-center justify-center">
          <label
            htmlFor="dailyLimit"
            className="mb-2 text-xl font-medium text-gray-900 content-left"
          >
            1. Set your Daily Caffeine Limit (mg)
          </label>
          <input
            type="text"
            id="dailyLimit"
            name="dailyLimit"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 "
            defaultValue={userSetting.dailyLimit}
            value={editedSetting.dailyLimit}
            onChange={handleChange}
            required
          />
          <p className="mb-10 text-gray-500 text-xs text-left w-full p-2.5">
            ☕ Suggested limit for healthy adults : 400mg
            <br />
            🤰🏻 Suggested limit for pregnant woman : less than 200mg
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <label
            htmlFor="sleepTreshold"
            className="mb-2 text-xl font-medium text-gray-900 content-left"
          >
            2. Set your Caffeine levels(mg) to sleep
          </label>
          <input
            type="text"
            id="sleepTreshold"
            name="sleepTreshold"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 "
            defaultValue={userSetting.sleepTreshold}
            value={editedSetting.sleepTreshold}
            onChange={handleChange}
            required
          />
          <p className="mb-10 text-gray-500 text-xs text-left w-full p-2.5">
            ✅ Experts say caffeine levels should drop to about 50mg to get a
            good night's sleep.
            <br />
            ➕ If you sleep well even if you drink coffee late at night, raise
            this number.
            <br />➖ If drinking a little coffee interfere with your sleep,
            lower this number.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <label
            htmlFor="sleepTime"
            className="mb-2 text-xl font-medium text-gray-900 content-left"
          >
            3. Set your sleep time
          </label>
          <select
            id="sleepTime"
            name="sleepTime"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            defaultValue={userSetting.sleepTime}
            value={editedSetting.sleepTime}
            onChange={handleChange}
            required
          >
            <option value="6PM">6 P.M.</option>
            <option value="7PM">7 P.M.</option>
            <option value="8PM">8 P.M.</option>
            <option value="9PM">9 P.M.</option>
            <option value="10PM">10 P.M.</option>
            <option value="11PM">11 P.M.</option>
            <option value="12AM">12 A.M.</option>
            <option value="1AM">1 A.M.</option>
            <option value="2AM">2 A.M.</option>
            <option value="3AM">3 A.M.</option>
            <option value="4AM">4 A.M.</option>
            <option value="5AM">5 A.M.</option>
            <option value="6AM">6 A.M.</option>
          </select>
          <p className="text-gray-500 text-xs text-left w-full p-2.5"></p>
        </div>
        <div className="flex">
          <button
            type="submit"
            value="save"
            className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mt-10"
          >
            SAVE CHANGE
          </button>
        </div>
      </form>
    </div>
  );
}

export default Setting;
