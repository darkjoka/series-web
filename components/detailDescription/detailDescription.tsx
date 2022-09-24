import React from "react";

export default function DetailDescription({ description, genres }) {
  return (
    <>
      {/* tags */}
      <div className="flex items-center space-x-2 my-2 overflow-x-scroll">
        {genres.map((genre) => (
          <GenreTag {...{ genre }} key={genre} />
        ))}
      </div>

      {/* teaser */}
      <div>
        <p>{description}</p>
      </div>
    </>
  );
}

const GenreTag = ({ genre }) => {
  return <div className="px-2 border rounded hover:bg-gray-100">{genre}</div>;
};
