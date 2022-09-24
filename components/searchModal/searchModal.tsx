import { a, useTransition } from "@react-spring/web";
import axios from "axios";
import dynamic from "next/dynamic";
import React, { useCallback, useEffect, useState } from "react";

import useRecent from "../../store/useRecent";
import useSearch from "../../store/useSearch";
import debounce from "../../utils/debounce";
import RecentItem from "../recentItem";
import SearchItem from "../searchItem";

const Portal = dynamic(() => import("../port"), { ssr: false });

export default function SearchModal() {
  const { isSearchOpen, closeSearch } = useSearch();
  const [results, setResults] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const [recent, setRecent] = useState(true);

  const { add, remove, searches } = useRecent();

  const handleKeyPress = async (event) => {
    const { value } = event.target;

    if (value.length > 2) {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_HOST}search/${value}`
      );

      setResults(response.data.data);
      if (response.data.data.length === 0) {
        setUserMessage("No results found");
      } else {
        setUserMessage("");
      }
      return;
    }

    setResults([]);
    setUserMessage("At least three characters are required");
  };

  const handleChange = (event) => {
    handleSearch(event);
    handleRecent(event);
  };

  const handleRecent = (event) => {
    const { value } = event.target;
    if (value.length === 0) {
      setRecent(true);
      return;
    }

    setRecent(false);
  };

  const handleSearch = useCallback(debounce(handleKeyPress), []);

  const modalTransition = useTransition(isSearchOpen, {
    delay: 2,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <Portal>
      <div>
        {modalTransition(
          ({ opacity }, item) =>
            item && (
              <>
                <a.div
                  className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 z-10"
                  style={{ opacity }}
                  onClick={closeSearch}
                ></a.div>
                <a.div
                  className="fixed top-0 left-0 w-full h-96 bg-white z-10 flex-col sm:rounded sm:left-30 sm:top-5 sm:w-[700px] sm:left-1/2 sm:-translate-x-1/2 xl:-translate-x-3/4"
                  style={{ opacity }}
                >
                  <div className="h-20 flex items-center justify-around w-full px-2 ">
                    <input
                      type="text"
                      className="w-4/5 rounded-sm h-12 bg-gray-100 active:bg-gray-200 focus:bg-gray-200 px-4"
                      onChange={handleChange}
                      autoFocus
                    />
                    <button onClick={closeSearch} className="font-bold">
                      Cancel
                    </button>
                  </div>
                  <div className="bg-gray-100 h-full rounded p-4 space-y-2 overflow-y-scroll">
                    {recent ? (
                      <>
                        <div className="w-full font-semibold">
                          Recent Searches
                        </div>
                        {searches.map(({ title, permalink }) => (
                          <RecentItem
                            key={title}
                            {...{ title, permalink, remove, closeSearch }}
                          />
                        ))}
                      </>
                    ) : (
                      <>
                        {results.length === 0 && userMessage && (
                          <div className="p-4">{userMessage}</div>
                        )}

                        {results.map(({ title, permalink }) => (
                          <SearchItem
                            key={title}
                            {...{ title, permalink, closeSearch, add }}
                          />
                        ))}
                      </>
                    )}
                  </div>
                </a.div>
              </>
            )
        )}
      </div>
    </Portal>
  );
}
