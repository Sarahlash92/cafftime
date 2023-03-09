import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { postLog } from '../ApiService';


function DataDetail({ selectedItem }) {
  const navigate = useNavigate();
  const [newLog, setNewLog] = useState({ ...selectedItem });
  const caffeineRatio = selectedItem.caffeine / selectedItem.baseAmount;
  function handleChange(e) {
    if (e.target.name === "baseAmount") {
      const caffeineValue = Math.round(caffeineRatio * e.target.value);
      setNewLog({
        ...newLog,
        baseAmount: e.target.value,
        caffeine: caffeineValue
      });
    } else {
      setNewLog({
        ...newLog,
        [e.target.name]: e.target.value,
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const updatedLog = {
      ...newLog,
      name: e.target.name.value,
      baseAmount: e.target.baseAmount.value,
      caffeine: e.target.caffeine.value,
      timestamp: e.target.timestamp.value,
    };
    setNewLog(updatedLog);
    handlePost(updatedLog);
  }

function handlePost(updatedLog) {
    postLog(updatedLog);
    navigate("/log");
  }

  /* show selected Item and allow users to edit detail */
  if (selectedItem._id) {
    return (
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <img src={selectedItem.imageUrl} className="w-24 m-4"></img>

        <div className="flex">
          <label
            htmlFor="name"
            className="mb-2 text-sm font-medium text-gray-900"
          >
            name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            defaultValue={selectedItem.name}
            value={newLog.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex">
          <label
            htmlFor="baseAmount"
            className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            amount
          </label>
          <input
            type="text"
            id="baseAmount"
            name="baseAmount"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            defaultValue={selectedItem.baseAmount}
            value={newLog.baseAmount}
            onChange={handleChange}
            required
          />
          ml
        </div>

        <div className="flex">
          <label
            htmlFor="caffeine"
            className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            caffeine
          </label>
          <input
            type="text"
            id="caffeine"
            name="caffeine"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            defaultValue={selectedItem.caffeine}
            value={newLog.caffeine}
            required
          />{" "}
          mg
        </div>
        <div>
          <label
            htmlFor="timestamp"
            className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            time
          </label>
          <input
            type="datetime-local"
            id="timestamp"
            name="timestamp"
            defaultValue={new Date().toISOString().slice(0, 16)}
            value={newLog.timestamp}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center m-4 dark:focus:ring-yellow-900"
        >
          SAVE
        </button>
      </form>
    );
  }
}

export default DataDetail;
