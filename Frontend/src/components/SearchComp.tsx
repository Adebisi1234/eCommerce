import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [query, setQuery]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>("");
  const navigate = useNavigate();
  return (
    <div className="search h-[40px] rounded-3xl sm:mt-0 mt-6 flex pl-4 items-center gap-5 bg-[var(--bg-lightDark)]">
      <svg
        className="fav"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => {
          navigate(`/search/${query}`);
        }}
      >
        <path d="M192 480a256 256 0 1 1 512 0 256 256 0 0 1-512 0m631.776 362.496l-143.2-143.168A318.464 318.464 0 0 0 768 480c0-176.736-143.264-320-320-320S128 303.264 128 480s143.264 320 320 320a318.016 318.016 0 0 0 184.16-58.592l146.336 146.368c12.512 12.48 32.768 12.48 45.28 0 12.48-12.512 12.48-32.768 0-45.28" />
      </svg>
      <input
        type="text"
        placeholder="Search Products"
        className="w-full h-full bg-transparent outline-none text-[var(--color-dark)]"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setQuery(e.target.value);
        }}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === "Enter") {
            navigate(`/search/${query}`);
          }
        }}
      />
    </div>
  );
};

export default Search;
