import { Link } from "react-router-dom";
import { Logs } from '../tsTypes';

//TODO: check if ln 14 is working with toString()

function Log({ logs }: {logs: Logs[]}) {
  return (
    <div className="rounded-t-2xl h-[calc(80vh-64px)] overflow-scroll bg-white">
      <div className="relative px-4">
        {logs.map((log :Logs) => {

          return (
            <div className="border-b-2 py-4" key ={log.date?.toString()}>
              <p className="text-2xl font-bold text-left">{log.date?.toString()}</p>
              <p className="text-2xl font-bold text-left">
                Total Caffeine{" "}
                <span className="text-2xl font-bold text-red-500">
                  {log.logs?.reduce((acc: number, log: Logs) => {
                    acc = acc + log.caffeine;
                    return acc;
                  }, 0)}
                  {" "}
                  mg{" "}
                </span>
              </p>
              {log.logs?.map((item:Logs) => {
                const detailUrl = `/log/edit/${item._id}`;
                return (
                  <Link
                    to={detailUrl}
                    className="block p-6 bg-amber-50 border border-amber-200 rounded-lg shadow hover:bg-gray-100 my-2 flex justify-between items-center"
                    key={item._id}
                  >
                    <div>
                      <span>
                        {item.name} {item.baseAmount}ml :
                      </span>
                      <span className="text-red-500 font-bold">
                        {" "}
                        {item.caffeine}mg{" "}
                      </span>
                    </div>
                    <p className="text-gray-600 text-xs">
                      at{" "}
                      {new Date(item.timestamp).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </Link>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Log;
