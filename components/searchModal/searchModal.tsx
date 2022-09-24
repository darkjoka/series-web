import {a, useTransition} from '@react-spring/web';
import axios from 'axios';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React, {useCallback, useState} from 'react';

import useSearch from '../../store/useSearch';
import debounce from '../../utils/debounce';

const Portal = dynamic(() => import('../port'), {ssr: false});

export default function SearchModal() {
  const {isSearchOpen, closeSearch} = useSearch();
  const [results, setResults] = useState([]);

  const handleKeyPress = async event => {
    const {value} = event.target;
    if (value.length > 2) {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_HOST}search/${value}`
      );

      setResults(response.data.data);
      return;
    }

    setResults([]);
  };

  const handleSearch = useCallback(debounce(handleKeyPress), []);

  const modalTransition = useTransition(isSearchOpen, {
    delay: 2,
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
  });

  return (
    <Portal>
      <div>
        {modalTransition(
          ({opacity}, item) =>
            item && (
              <>
                <a.div
                  className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 z-10"
                  style={{opacity}}
                  onClick={closeSearch}
                ></a.div>
                <a.div
                  className="fixed top-0 left-0 w-full h-96 bg-white z-10 flex-col sm:rounded sm:left-30 sm:top-5 sm:w-[700px] sm:left-1/2 sm:-translate-x-1/2 xl:-translate-x-3/4"
                  style={{opacity}}
                >
                  <div className="h-20 flex items-center justify-around w-full px-2 ">
                    <input
                      type="text"
                      className="w-4/5 rounded-sm h-12 bg-gray-100 active:bg-gray-200 focus:bg-gray-200"
                      onChange={handleSearch}
                    />
                    <button onClick={closeSearch} className="font-bold">
                      Cancel
                    </button>
                  </div>
                  <div className="bg-gray-100 h-full rounded p-4 space-y-2 overflow-y-scroll">
                    {results.map(({title, permalink}) => (
                      <Link
                        href={`/download/${permalink}`}
                        passHref
                        key={permalink}
                      >
                        <a
                          key={title}
                          className="hover:bg-white block p-4 rounded"
                          onClick={closeSearch}
                        >
                          {title}
                        </a>
                      </Link>
                    ))}
                  </div>
                </a.div>
              </>
            )
        )}
      </div>
    </Portal>
  );
}
