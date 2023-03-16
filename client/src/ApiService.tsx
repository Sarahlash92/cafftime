 import { Logs} from './tsTypes';
const {REACT_APP_baseURL} = process.env;


/* api service for food DB*/
export const getDatabase = async () => {
  const response = await fetch( `${REACT_APP_baseURL}/db`)
    .then((res) => res.json())

  return response;
}

/* api service for log DB*/
export const getLogs = async () => {
  const response = await fetch(`${REACT_APP_baseURL}/log`)
    .then((res) => res.json())
    .then((data) => data.sort((a: { timestamp: string }, b: { timestamp: string }) => {
      return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
    }));
    //  .then((data) => data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)));

  return response;
};

export const getLog = async (id:string ) => {
  const response = await fetch(`${REACT_APP_baseURL}/log/edit/${id}`)
    .then((res) => res.json())

  return response;
};

export const postLog = async (newLog : Logs) => {
  const response = await fetch(`${REACT_APP_baseURL}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newLog),
  });

  return response.json();
};

export const deleteLog = async (id: string ) => {
  const response = await fetch(`${REACT_APP_baseURL}/log/edit/${id}`, {
    method: "DELETE"
  })

  return response;
};

export const editLog = async (id: string, editedLog:Logs) => {
  const response = await fetch(`${REACT_APP_baseURL}/log/edit/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(editedLog),
  });


  return response.json();
};
