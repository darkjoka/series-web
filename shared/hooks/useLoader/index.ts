import axios from "axios";
import React from "react";
import useSWR from "swr";

const fetcher = (url: string) => url && axios.get(url).then((response) => response.data.data);

export const useLoader = (link: string, active: boolean, updater: (data: any) => void) => {
  const [loadError, setLoadError] = React.useState(false);
  const resetHandler = () => setLoadError(false);
  const { data, error } = useSWR(active && !loadError ? link : "", fetcher);

  React.useEffect(() => {
    if (error) {
      setLoadError(true);
    }
    if (data) {
      updater(data);
    }
  }, [loadError, error, data, updater]);

  return { loadError, resetHandler };
};
