import Link from "next/link";
import { X } from "react-feather";

export default function RecentItem({ permalink, title, remove, closeSearch }) {
  const handleClick = (event) => {
    remove({ permalink, title });
  };

  return (
    <div className="flex justify-between items-center h-12 px-4">
      <Link href={`/download/${permalink}`} passHref key={permalink}>
        <a onClick={closeSearch}>{title}</a>
      </Link>
      <button
        onClick={handleClick}
        className="h-10 w-10 flex items-center justify-center rounded border"
      >
        <X className="opacity-25" />
      </button>
    </div>
  );
}
