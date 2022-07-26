import { useState, useEffect } from "react";

function useDataFetching(dataSource) {
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const tasks = await fetch(dataSource);
        const result = await tasks.json();

        if (result) {
          setTasks(result);
          setLoading(false);
        }
      } catch (e) {
        setLoading(false);
        setError(e.message);
      }
    }
    fetchData();
  }, [dataSource]);

  return [loading, error, tasks];
}

export default useDataFetching;
