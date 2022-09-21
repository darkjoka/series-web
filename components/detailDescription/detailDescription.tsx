import React from 'react';

export default function DetailDescription() {
  return (
    <>
      {/* tags */}
      <div className="flex space-x-2 items-center mt-2 flex-wrap sm:my-4 space-y-2">
        <div className="p-2 border rounded hover:bg-gray-100">Lorem.</div>
        <div className="p-2 border rounded hover:bg-gray-100">Det</div>
        <div className="p-2 border rounded hover:bg-gray-100">Lorem</div>
        <div className="p-2 border rounded hover:bg-gray-100">Lorem dolor.</div>
      </div>

      {/* teaser */}
      <div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
          optio, consectetur reprehenderit quas molestiae quod eos amet illum
          corporis nam deserunt quisquam distinctio laborum adipisci maxime rem
          pariatur blanditiis?
        </p>
      </div>
    </>
  );
}