import headerStyler from "./Header.module.css";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <div>
      <div className={headerStyler.header}>
        <h1>Movie App</h1>
        <section className={headerStyler.searchBox}>
          <input
            type="text"
            placeholder="Enter the movies"
            spellCheck="false"
          />
          <button type="button">
            <FaSearch />
          </button>
        </section>
      </div>
      <h3>Movies in Chennai</h3>
    </div>
  );
}
