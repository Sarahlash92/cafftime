import { useParams, useNavigate } from 'react-router-dom'
import { getLog, deleteLog, editLog } from "../ApiService"
import { useState, useEffect } from "react";

function EditData() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedLog, setSelectedLog] = useState({});
  const [editedLog, setEditedLog] = useState({ ...selectedLog })
  const caffeineRatio = selectedLog.caffeine / selectedLog.baseAmount;

  useEffect(() => {
    getLog(id).then((res) => setSelectedLog(res))
  }, [])

  function handleDelete() {
    deleteLog(id);
    navigate("/log");
  }

  function handleChange(e) {
    if (e.target.name === "baseAmount") {
      const caffeineValue = Math.round(caffeineRatio * e.target.value);
      setEditedLog({
        ...editedLog,
        baseAmount: e.target.value,
        caffeine: caffeineValue,
      });
    } else {
      setEditedLog({
        ...editedLog,
        [e.target.name]: e.target.value,
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const updatedLog = {
      ...editedLog,
      name: e.target.name.value,
      baseAmount: e.target.baseAmount.value,
      caffeine: e.target.caffeine.value,
      timestamp: e.target.timestamp.value,
    };
    setEditedLog(updatedLog);
    handleEdit(updatedLog);
  }

  function handleEdit(updatedLog) {
    editLog(id, updatedLog)
    navigate("/log");
  }

  if (!selectedLog._id) return null;
  const formattedTimestamp = new Date(selectedLog.timestamp)
      .toISOString()
      .slice(0, 16);

  return (
    <div className="rounded-t-2xl h-[calc(80vh-64px)] overflow-scroll bg-white relative">
      <h1 className="text-2xl font-bold my-6">EDIT DATA</h1>
      <form
        className="flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        <div className="flex">
          <label
            htmlFor="name"
            className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            defaultValue={selectedLog.name}
            value={editedLog.name}
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
            defaultValue={selectedLog.baseAmount}
            value={editedLog.baseAmount}
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
            defaultValue={selectedLog.caffeine}
            value={editedLog.caffeine}
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
            defaultValue={formattedTimestamp}
            value={editedLog.timestamp}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex">
          <button
            type="button"
            value="delete"
            className="text-white bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mt-10 mr-8"
            onClick={handleDelete}
          >
            DELETE
          </button>
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

export default EditData;
