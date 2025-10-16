import { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const CountryDropdown = ({
  country,
  setCountry,
}: {
  country: string;
  setCountry: (val: string) => void;
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const countries = [
    { code: "US"},
    { code: "UK" },
    { code: "LK" },
  ];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (code: string) => {
    setCountry(code);
    setOpen(false);
  };

  return (
    <div className="relative w-20" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full border group border-gray-300  dark:border-white/10 dark:text-off-white/70 rounded-lg p-3 text-sm flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-primary/40 dark:focus:ring-primary"
      >
        {countries.find((c) => c.code === country)?.code}
        <div
          className={`${
            open
              ? "rotate-180 transition-all duration-500"
              : "rotate-0 transition-all duration-500"
          }`}
        >
          <FiChevronUp />
        </div>
      </button>

      {open && (
        <ul className="absolute z-10 w-full mt-1 bg-white dark:bg-off-white border border-gray-300 dark:border-off-white/30 rounded-lg shadow-md max-h-60 overflow-auto">
          {countries.map((c) => (
            <li
              key={c.code}
              className={`p-3 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-primary ${
                country === c.code ? "bg-gray-200 dark:bg-primary" : ""
              }`}
              onClick={() => handleSelect(c.code)}
            >
              {c.code}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CountryDropdown;
