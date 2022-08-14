import {useRouter} from 'next/router';
import React, {ChangeEvent} from 'react';

export const Search = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [isFocused, setIsFocused] = React.useState(false);
  const router = useRouter();

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    if (searchTerm) {
      router.push(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <div className="grid place-items-center -mt-9">
      <div
        className={`border-2 ${
          isFocused &&
          'ring-4 ring-teal-500 ring-opacity-80 ring-offset-1 border-none'
        } rounded-3xl h-20 flex items-center justify-center w-11/12 max-w-2xl pl-4 pr-2 py-5 shadow-lg space-x-2`}
        onSubmit={handleSubmit}
      >
        <input
          className="h-14 outline-none text-xl font-semibold bg-transparent flex-1"
          type="text"
          name="search"
          id="search"
          minLength={3}
          value={searchTerm}
          onChange={handleSearch}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        <button
          className="bg-teal-400 w-36 focus:ring-4 focus:ring-teal-400 ring-offset-2 h-14 rounded-2xl font-semibold text-xl shadow-md hover:shadow-none"
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
    </div>
  );
};
