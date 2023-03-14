import { useParams, useNavigate } from 'react-router-dom'
import { getLog, deleteLog, editLog } from "../ApiService"
import React, { useState, useEffect } from "react";
import { Food } from '../tsTypes'


function EditData({ itemDeleted }: {itemDeleted:  React.Dispatch<React.SetStateAction<boolean>>}) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedLog, setSelectedLog] = useState<any>({});
  const [editedLog, setEditedLog] = useState<Food>({ ...selectedLog })
  const caffeineRatio = selectedLog.caffeine / selectedLog.baseAmount;

  useEffect(() => {
    getLog(id)
    .then((res) => setSelectedLog(res))
    .catch((error)=>console.log(error)
    )
  }, [])

  function handleDelete() {
    deleteLog(id);
    itemDeleted(true);
    navigate("/log");
  }
//TODO:We don't have to run the parseInt(e.target.value, 10) operation twice inside this function. Run once, store in a variable, re-use. ♻️
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.name === "baseAmount") {
      const caffeineValue = Math.round(caffeineRatio * parseInt(e.target.value, 10));
      setEditedLog({
        ...editedLog,
        baseAmount: parseInt(e.target.value, 10),
        caffeine: caffeineValue,
      });
    } else {
      setEditedLog({
        ...editedLog,
        [e.target.name]: e.target.value,
      });
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const updatedLog = {
      ...editedLog,
      name: e.currentTarget.name,
      baseAmount: parseInt(e.currentTarget.baseAmount.value, 10),
      caffeine: parseInt(e.currentTarget.caffeine.value, 10),
      timestamp: e.currentTarget.timestamp.value,
    };
    setEditedLog(updatedLog);
    handleEdit(updatedLog);
  }

  function handleEdit(updatedLog: any) {
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
