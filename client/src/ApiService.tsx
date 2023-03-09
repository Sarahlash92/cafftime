const URL = "http://localhost:4000";

/* api service for food DB*/
export const getDatabase = async () => {
  const response = await fetch(URL + "/db")
    .then((res) => res.json())

  return response;
}

/* api service for log DB*/
export const getLogs = async () => {
  const response = await fetch(URL + "/log")
    .then((res) => res.json())
    .then((data) => data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)));

  return response;
};

export const getLog = async (id) => {
  const response = await fetch(URL + "/log/edit/" + id)
    .then((res) => res.json())

  return response;
};

export const postLog = async (newLog) => {
  const response = await fetch(URL + "/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newLog),
  });

  return response.json();
};

export const deleteLog = async (id) => {
  const response = await fetch(URL + "/log/edit/" + id, {
    method: "DELETE"
  })

  return response;
};

export const editLog = async (id, editedLog) => {
  const response = await fetch(URL + "/log/edit/" + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(editedLog),
  });

  return response.json();
};